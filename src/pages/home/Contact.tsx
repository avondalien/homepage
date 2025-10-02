import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { ContactForm } from "./ContactForm"

const Contact = () => {

    return (
        <section id="contact">
            <Typography variant="h4">
                Contact
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" marginBottom={2}>
                <Box width={{xs: '100%', md: '45%' }} padding={0} margin={1}>
                    <Card>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </Box>
                <Box width={{xs: '100%', md: '45%' }} padding={0} margin={1}>
                    <Card>
                        <CardContent>
                            <Typography 
                                variant="h5"
                                align="center"
                            >
                                Write Us an Email
                            </Typography>
                            <Typography 
                                variant="body1" 
                                align="center" 
                                component="a" 
                                href="mailto:george@avondalien.com"
                            >
                                george@avondalien.com
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </section>
    )

}

export { Contact }