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
                        <Stack>
                            <Typography variant="h5">
                                Hi, I'm George
                            </Typography>
                            <Typography variant="body1">
                                <p>
                                    I started Avondalien so that I could help driven people bring 
                                    their computing projects to life. 
                                </p>
                                <p>
                                    Student programmers accomplish major discoveries every day, but their 
                                    software isn't always reproducible, nor ready to run on production servers 
                                    with large numbers of users. I bring multidisciplinary experience in enterprise 
                                    web development and civil engineering to help you take your projects to the 
                                    next level with: 
                                </p>
                                <ul>
                                    <li>Reproducible, scalable, cloud native deployments</li>
                                    <li>Software architecture best practices</li>
                                    <li>Automated testing strategies</li>
                                    <li>Guiding collaboration and continuity among student programmers</li>
                                </ul>
                                <p>
                                    Check out my <a href="https://www.linkedin.com/in/georgedill/">Linked In</a> and <a href="https://github.com/kimjongdill">Github</a> to 
                                    learn more about my history and the kind of work I do!
                                </p>
                            </Typography>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </section>
    )
}

export { About }