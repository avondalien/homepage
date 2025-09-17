import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Footer = () => {
    return (
        <footer>
            <Box width="100%" 
                display="flex" 
                flexDirection="column"
                justifyContent="center"
                padding={2}
            >
                <Typography variant="body1" align="center">Copyright 2025 Avondalien Software LLC</Typography> 
                <Typography variant="body1" align="center" component="a" href="mailto:george@avondalien.com">george@avondalien.com</Typography>
            </Box>
        </footer>
    )
}

export { Footer }
