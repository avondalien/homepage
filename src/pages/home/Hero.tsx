import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Hero = () => {

    return (
        <section id="summary">
            <Card sx={{margin: 1}}>
                <CardContent>
                    <Stack direction="row" alignItems="space-evenly" spacing={2}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h4">
                                Locally sourced software for Chicago
                            </Typography>
                            <Typography variant="body1" component="p">
                                Most small businesses need more than a template — but less than an enterprise dev shop.
                                That's exactly where I work. I build custom websites and web apps for Chicago businesses
                                and organizations that need something that actually fits.
                            </Typography>
                            <Box sx={{paddingTop: 4}}>
                                <a href="#contact">
                                    <Button variant="outlined">Let's talk about your project →</Button>
                                </a>
                            </Box>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </section>
    )
}

export { Hero }