import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { Form } from "../../form"
import { useEmailClient, type SendEmailRequest } from "../../clients"

export const ContactForm = () => {
    const {
        sent,
        pending,
        error,
        handleSendEmail
    } = useEmailClient()

    const handleSubmit = (event: any): void => {
        event.preventDefault()
        const form = event.target
        const fd = new FormData(form)
        let emailRequest: Record<string, any> = {}
        for(const entry of fd.entries()){
            const [k, v] = entry
            emailRequest[k] = v
        }
        handleSendEmail(emailRequest as SendEmailRequest)
    }
    
    return (
        <Stack spacing={2}>
            <Typography 
                variant="h5"
                align="center"
            >
                Let's Talk About Your Project!
            </Typography>
                <Form 
                    formId="CONTACT_SHEET"
                    onSubmit={handleSubmit}
                >
                    <Stack spacing={2}>
                        <TextField 
                            label="Name"
                            name="name"
                            type="text"
                            required={true}
                            slotProps={{
                                htmlInput: {
                                    maxLength: 30
                                }
                            }}
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            type="tel"
                            required={true}
                            slotProps={{
                                htmlInput: {
                                    type: "tel",
                                    maxLength: 20,
                                    minLength: 10
                                }
                            }}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="text"
                            required={true}
                            slotProps={{
                                htmlInput: {
                                    type: "email"
                                }
                            }}
                        />
                        <TextField
                            label="Tell me about your project!"
                            name="description"
                            type="text"
                            multiline
                            minRows={5}
                            required={true}
                            slotProps={{
                                htmlInput: {
                                    maxLength: 1000
                                }
                            }}
                        />
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button type="reset">
                                Reset
                            </Button>
                            <Button variant="outlined" type="submit" disabled={sent || pending}>
                                { sent ? "Form Submitted" : "Request Consultation" }
                            </Button>
                        </Stack>
                        { error && (<Typography variant="body1" color="red" align="right">
                                        Failed to submit. Please try again
                                    </Typography>)
                        }
                    </Stack>
                </Form>
        </Stack>
    )
}