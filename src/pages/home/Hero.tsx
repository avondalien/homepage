import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Hero = () => {

    return (
        <section id="summary">
            <Box sx={{
                backgroundColor: '#2e6b54',
                padding: 4,
            }}>
                <Stack direction="row" alignItems="space-evenly" spacing={2}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Typography variant="h4" sx={{ color: 'white' }}>
                            Locally sourced software for Chicago
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                            Most small businesses need more than a template — but less than an enterprise dev shop.
                            That's exactly where I work. I build custom websites and web apps for Chicago businesses
                            and organizations that need something that actually fits.
                        </Typography>
                        <Box sx={{ paddingTop: 2 }}>
                            <a href="#contact">
                                <Button sx={{
                                    backgroundColor: '#F4F1ED',
                                    color: '#2e6b54',
                                    fontWeight: 700,
                                    '&:hover': { backgroundColor: '#e8e4df' }
                                }}>
                                    Let's talk about your project →
                                </Button>
                            </a>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </section>
    )
}

export { Hero }
