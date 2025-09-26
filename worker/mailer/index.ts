import { env } from "../environment"
import { SignatureV4 } from '@aws-sdk/signature-v4'
import { Sha256 } from "@aws-crypto/sha256-browser";

interface MailMessage {
    email: string
    phone?: string
    name: string
    description: string
}

const SUBJECT = "New Lead!"

const mailer = async (message: MailMessage): Promise<Boolean> => {

    const signer = new SignatureV4({
        credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY
        },
        service: "sns",
        region: env.AWS_REGION,
        sha256: Sha256
    })

    const host = `sns.${env.AWS_REGION}.amazonaws.com`

    const headers = {
        // "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        host
    }

    try {
        const presignedRequest = await signer.presign({
            method: "GET",
            protocol: "https",
            hostname: host,
            path: '/',
            query: {
                Action: "Publish",
                TopicArn: env.NEW_LEAD_TOPIC_ARN,
                Message: JSON.stringify(message),
                Subject: SUBJECT,
                Version: "2010-03-31",
            },
            headers,
        })

        const url = new URL(`https://${host}/`)

        const queryParams = JSON.parse(JSON.stringify(presignedRequest.query)) as Record<string, string>
        Object.entries(queryParams).forEach(([k, v]) => {
            url.searchParams.append(k, v as string)
        })
        
        const response = await fetch(url, { headers: presignedRequest.headers })
        
        return response.ok
    } catch (e) {
        console.log((e as Error).toString())
        return false
    }
}

export { type MailMessage, mailer }