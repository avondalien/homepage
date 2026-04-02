import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import georgeImg from "../../assets/img/george_profile.png"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

const About = () => {

    return(
        <section id="about">
            <Typography variant="h4">
                About
            </Typography>
            <Card>
                <CardContent>
                    <Box display="flex" alignItems="center">
                        <CardMedia
                            component="img"
                            image={georgeImg}
                            height={250}
                            alt="A portrait of George Dill"
                            sx={{
                                objectFit: 'contain',
                                display: {xs: 'none', md: "flex"}
                            }}
                        />
                        <Stack spacing={2}>
                            <Typography variant="h5">
                                Hi, I'm George
                            </Typography>
                            <Typography variant="body1" component="p">
                                I started Avondalien so that I could help driven people bring 
                                their computing projects to life. 
                            </Typography>
                            <Typography variant="body1" component="p">
                                I've spent six years as a full-stack developer in enterprise environments, where
                                I learned firsthand how software can either enable a business or get in its way.
                                That experience shapes how I work with every client: I listen first, then build
                                something that actually fits your organization.
                            </Typography>
                            <Typography variant="body1" component="p">
                                I'm at my best building websites and web apps. I've built lead generation sites,
                                transit trackers, automated deployments, and authentication systems for educational
                                platforms. 
                            </Typography>
                            <Typography variant="body1" component="p">
                                My target areas include: reproducible software for higher ed, scheduling apps for home
                                repair services, member management portals for health clubs, and online ordering
                                for coffee shops, sandwich counters, and neighborhood retail.
                            </Typography>
                            <Typography variant="body1" component="p">
                                    Check out my <a href="https://www.linkedin.com/in/georgedill/">Linked In</a> and <a href="https://github.com/kimjongdill">Github</a> to 
                                    learn more about my history and the kind of work I do!
                            </Typography>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </section>
    )
}

export { About }