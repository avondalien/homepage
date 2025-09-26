const EMAIL_SERVICE_PATH = "/api/mailer"

interface SendEmailRequest {
    name: string
    email: string
    phone?: string
    description: string
}

const sendEmail = async (emailDetails: SendEmailRequest): Promise<boolean> => {
    const hostname = window.location.hostname
    const port = window.location.port
    const protocol = window.location.protocol
    const url = `${protocol}//${hostname}:${port}${EMAIL_SERVICE_PATH}`
    
    console.log(url)
    const headers = new Headers({
        "Content-Type": "application/json",
    })


    const request = new Request(url, 
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