import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import githubImg from "../../assets/img/github.svg"
import Stack from "@mui/material/Stack"

interface ProjectCardProps {
    title: string
    description: string
    categories: string[]
    githubLink?: string
    image: string
    imageAltText: string
}

const ProjectCard = (props: ProjectCardProps) => {
    const {title, description, categories, githubLink} = props
    return (
        <Card sx={{margin: 1, width: {xs: "100%", md: "45%"}}}>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                    {
                        !!githubLink ? (
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <img src={githubImg} alt="github logo"/>
                                <Typography variant="body1">
                                    <a href={githubLink}>
                                        Explore the Repo
                                    </a>
                                </Typography>
                            </Stack>
                        ) : ""
                    }
                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                        {categories.map(c => (<Chip label={c} key={c} sx={{marginTop: 1, marginRight: 1}}/>))}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

const ProjectDescriptions = [
    // {
    //     title: "Securing QInterpreter",
    //     description: "QInterpreter's student team built a gorgeous interface over a jupyter notebook. Avondalien helped close security vulnerabilities before launch day.",
    //     categories: ["security", "cloud architecture"],
    //     image: "",
    //     imageAltText: ""
    // },
    {
        title: "Real Time Transit Updates",
        description: "When Terra Coffee opened a location near a busy transit stop, Avondalien built a custom bus and train tracking board so customers could spend more time in the shop instead of on the platform.",
        categories: ["web development", "automated deployments"],
        githubLink: "https://github.com/avondalien/terra/",
        image: "",
        imageAltText: ""
    },
    {
        title: "Workflow Tracking Tool",
        description: "A manufacturing company wanted to migrate their part development workflow out of SAP. Working with UX designers George architected a user interface in React and specified an interface with data layers supporting the rich search and filtering requirements. George led a team of junior developers to build a cloud native, event driven data synchronization layer and delivered on time.",
        categories: ["web development", "mentorship", "cloud", "agile project management"],
        image: "",
        imageAltText: ""
    },
    {
        title: "Reducing Software Build Times and Increasing Collaboration",
        description: "An organization with multiple teams frequently erred when deploying a monorepo React UI with manually tracked dependencies. George identified microfrontends as an appropriate deployment pattern and broke the monorepo into independent modules. Build time was reduced by half an hour and deployment errors disappeared.",
        categories: ["design patterns", "automated deployments", "reliability"],
        image: "",
        imageAltText: ""
    },
]

const Projects = () => {

    return (
        <section id="projects">
            <Typography variant="h4">
                Projects
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                {ProjectDescriptions.map(pd => (<ProjectCard {...pd} key={pd.title} />))}
            </Box>
        </section>
    )
}

export { Projects }