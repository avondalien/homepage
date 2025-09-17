import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import georgeImg from "../../assets/img/george_profile.png"
import Stack from "@mui/material/Stack"
import CardMedia from "@mui/material/CardMedia"

const About = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            maxWidth={{sm: "100%", md: "80%"}}
        >
            <Typography 
                variant="h2" 
                align="center"
                gutterBottom
            >
                Our People
            </Typography>
            <Card>
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <CardMedia
                            component="img"
                            height={160}
                            width={160}
                            image={georgeImg}
                            alt="A portrait of George Dill smiling in front of a brick wall"
                            sx={{
                                objectFit: 'contain', 
                                width: '20%',
                                display: {xs: 'none', sm: 'flex'}}}
                        />
                        
                        <Stack direction="column">
                            <Typography variant="h5">
                                George Dill - Founder
                            </Typography>
                            <Typography 
                                component="a" 
                                href="mailto:george@avondalien.com"
                            >
                                email george@avondalien.com
                            </Typography>
                            <Typography variant="h6" paddingTop={2}>
                                About
                            </Typography>
                            <Typography component="p" paddingBottom={1}>
                                I bring experience building enterprise software in the cloud and project managing heavy construction 
                                projects on the ground. I enjoy helping you identify where software can bring value to your business 
                                and guiding you through getting the most of your software investment. 
                            </Typography>
                            <Typography component="p" paddingBottom={1}>
                                I've worked on projects for John Deere, Echo Global Logistics, and the US Army Corps of Engineers
                            </Typography>
                            <Typography component="p" paddingBottom={1}>
                                In my free time I like playing with my daughter, weight lifting, cycling, and the White Sox.
                            </Typography>
                            <Typography variant="h6" paddingTop={2}>Competencies</Typography>
                            <ul>
                                <Typography component="li">Web Development in React and Javscript</Typography>
                                <Typography component="li">Server Development in Javascript, Java, C#</Typography>
                                <Typography component="li">Cloud hosting strategies in AWS, Cloudflare</Typography>
                                <Typography component="li">Establishing DevOps business processes to speed time to market</Typography>
                                <Typography component="li">Collecting and visualizing business data for analysis</Typography>
                            </ul>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export { About }