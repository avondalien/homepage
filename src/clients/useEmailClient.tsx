import { useState } from "react"
import { sendEmail, type SendEmailRequest } from "./emailClient"


const useEmailClient = () => {
    const [sent, setSent] = useState(false)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(false)

    const handleSendEmail = async (request: SendEmailRequest): Promise<void> => {
        setPending(true)
        setError(false)
        const success = await sendEmail(request)
        if(!success){ 
            setError(true) 
        } else {
            setSent(true)
        }
        setPending(false)
    }

    return {
        sent,
        error,
        pending,
        handleSendEmail
    }
}

export { useEmailClient }