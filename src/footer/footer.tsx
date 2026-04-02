import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    backgroundColor: 'white',
                    borderTop: '1px solid #e0e0e0',
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 4,
                    paddingBottom: 4,
                }}
            >
                <Stack spacing={1} alignItems="center">
                    <Typography variant="logo">Avondalien Software</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Your friendly neighborhood software engineer
                    </Typography>
                    <Stack direction="row" spacing={3} sx={{ paddingTop: 1 }}>
                        <Typography variant="body2" component="a" href="tel:+17732406809" sx={{ color: 'text.primary', textDecoration: 'none' }}>
                            773.240.6809
                        </Typography>
                        <Typography variant="body2" component="a" href="mailto:george@avondalien.com" sx={{ color: 'text.primary', textDecoration: 'none' }}>
                            george@avondalien.com
                        </Typography>
                        <Typography variant="body2" component="a" href="https://www.google.com/maps/place/Avondalien+Software/@41.7032935,-87.9357745,8z/data=!3m1!4b1!4m6!3m5!1s0x86dcf5c82aaa865b:0xe275a8c87b0a3395!8m2!3d41.7032936!4d-87.9357745!16s%2Fg%2F11z3597kd_" target="_blank" rel="noreferrer" sx={{ color: 'text.primary', textDecoration: 'none' }}>
                            Chicago, IL
                        </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary', paddingTop: 2 }}>
                        © 2026 Avondalien Software LLC
                    </Typography>
                </Stack>
            </Box>
        </footer>
    )
}

export { Footer }
