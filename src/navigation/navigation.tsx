import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Navigation = () => {

    return (
        <>
            <header>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderBottom: '1px solid #e0e0e0',
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingTop: 2,
                        paddingBottom: 2,
                    }}
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack direction="column">
                        <Typography variant="logo">Avondalien Software</Typography>
                        <Typography variant="body2">Your friendly neighborhood software engineer</Typography>
                    </Stack>
                    <nav>
                        <Stack direction="row" marginTop={{xs: 2, sm: 0}} spacing={{xs: 0, sm: 2}} justifyContent={{xs: "left", lg: "right"}}>
                            <a href="#services">
                                <Button sx={{ display: {xs: "none", sm: "flex"}}}>Services</Button>
                            </a>
                            <a href="#projects">
                                <Button sx={{ display: {xs: "none", sm: "flex"}}}>Projects</Button>
                            </a>
                            <a href="#about">
                                <Button sx={{ display: {xs: "none", sm: "flex"}}}>About</Button>
                            </a>
                            <a href="#contact">
                                <Button variant="outlined">Contact</Button>
                            </a>
                        </Stack>
                    </nav>
                </Box>
            </header>
        </>
    )

}

export { Navigation }
