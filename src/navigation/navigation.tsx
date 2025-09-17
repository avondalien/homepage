import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Navigation = () => {

    return (
        <>
            <header>
                <Stack direction="row" justifyContent="space-between" marginBottom={4}>
                    <Stack direction="column">
                        <Typography variant="logo">Avondalien Software</Typography>
                        <Typography variant="body2">Built for Research</Typography>
                    </Stack>
                    <nav>
                        <Stack direction="row" spacing={2} justifyContent="right">
                            <a href="#services">
                                <Button>Services</Button>
                            </a>
                            <a href="#projects">
                                <Button>Projects</Button>
                            </a>
                            <a href="#about">
                                <Button>About</Button>
                            </a>
                            <a href="#contact">
                                <Button variant="outlined">Contact</Button>
                            </a>
                        </Stack>
                    </nav>
                </Stack>
            </header>
        </>
    )

}

export { Navigation }