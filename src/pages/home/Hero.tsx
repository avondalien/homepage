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
                                Getting a website.<br />
                                Fixing a broken one.<br />
                                Building something nobody's built before.
                            </Typography>
                            <Typography variant="h5">
                                Whatever your business needs, I build it.
                            </Typography>
                            <Typography variant="body1" component="p">
                                I'm George — a Chicago-based software engineer who works with small businesses,
                                local organizations, and anyone with a practical problem that technology can solve.
                                From transit displays to lead generation sites to event calendars, I take on the
                                full range of digital work that keeps a neighborhood running.
                            </Typography>
                            <Box>
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