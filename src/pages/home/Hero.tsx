import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Hero = () => {

    return (
        <section id="summary">
            <Card>
                <CardContent>
                        <Stack direction="row" alignItems="space-evenly" spacing={2}>
                            <Box display="flex" flexDirection="column">
                                <Typography variant="h4">
                                    Production Grade Software for Research
                                </Typography>
                                <Typography variant="body1" component="p">
                                    We architect and implement production ready software while focusing on collaboration, correctness, and reproducibility. 
                                    Spend your time on your research while we take care of the other stuff. 
                                </Typography>
                                <Box display="flex" flexDirection="row" flexWrap="wrap" marginTop={3}>
                                    <Chip label="Guided Delivery" sx={{marginRight: 1, marginBottom: 1}} />
                                    <Chip label="Cloud Native Architecture" sx={{marginRight: 1, marginBottom: 1}} />
                                    <Chip label="Enhanced Collaboration" sx={{marginRight: 1, marginBottom: 1}} />
                                    <Chip label="Software Design Patterns" sx={{marginRight: 1, marginBottom: 1}} />
                                </Box>
                            </Box>
                            {/* <Box display={{sm: 'none', md: 'flex'}} width="100%">
                                <img></img>
                                <Typography variant="body1" component="ul">
                                    <li>Cloud native</li>
                                    <li>Secure</li>
                                    <li></li>
                                </Typography>
                            </Box> */}
                        </Stack>
                </CardContent>
            </Card>
        </section>
    )
}

export { Hero }