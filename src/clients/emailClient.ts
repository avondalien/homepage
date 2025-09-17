const EMAIL_SERVICE_URL = "https://www.email.com"

interface SendEmailRequest {
    name: string
    email: string
    phone?: string
    description: string
}

const sendEmail = async (emailDetails: SendEmailRequest): Promise<boolean> => {
    const headers = new Headers({
        "Content-Type": "application/json",
    })

    const request = new Request(EMAIL_SERVICE_URL, 
        {
            headers, 
            method: "POST",
            body: JSON.stringify(emailDetails),
        }
    )

    let response = { ok: false }
    
    try {
        response = await fetch(request)
    } catch (_e) {
        console.error('network call failed')
    }
    
    return response.ok
}

export { type SendEmailRequest, sendEmail }