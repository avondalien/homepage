import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import githubImg from "../../assets/img/github.svg"
import Stack from "@mui/material/Stack"

interface ProjectCardProps {
    title: string
    description: string
    categories: string[]
    githubLink?: string
    siteLink?: string
    image: string
    imageAltText: string
}

const ProjectCard = (props: ProjectCardProps) => {
    const {title, description, categories, githubLink, siteLink} = props
    return (
        <Card sx={{width: {xs: "100%", md: "calc(50% - 16px)"}}}>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                    {githubLink && (
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <img src={githubImg} alt="github logo"/>
                            <Typography variant="body1">
                                <a href={githubLink}>Explore the Repo</a>
                            </Typography>
                        </Stack>
                    )}
                    {siteLink && (
                        <Typography variant="body1">
                            <a href={siteLink}>{siteLink.replace('https://', '')}</a>
                        </Typography>
                    )}
                    {/* {categories.length > 0 && (
                        <Box display="flex" flexDirection="row" flexWrap="wrap">
                            {categories.map(c => (<Chip label={c} key={c} sx={{marginTop: 1, marginRight: 1}}/>))}
                        </Box>
                    )} */}
                </Stack>
            </CardContent>
        </Card>
    )
}

const ProjectDescriptions = [
    {
        title: "Real Time Transit Updates",
        description: "When Terra Coffee opened a location near a busy transit stop, I built a custom bus and train tracking board so customers could spend more time in the shop instead of on the platform.",
        categories: [],
        githubLink: "https://github.com/avondalien/terra/",
        image: "",
        imageAltText: ""
    },
    {
        title: "Northlake Construction",
        description: "A local asphalt paving contractor needed a professional web presence to compete for new business. I visited their facility, listened to what mattered to them, and worked with the owner to select photos that showcased their best work. The result: a clean, static site with a contact form that puts a credible face on a quality local business.",
        categories: [],
        siteLink: "https://northlake-construction.com",
        githubLink: "https://github.com/northlakeconstruction/northlake-ui",
        image: "",
        imageAltText: ""
    },
    {
        title: "Workflow Tracking Tool",
        description: "A manufacturing company needed to move their parts development workflow out of SAP. I worked with UX designers to architect the interface, defined the data requirements, and led a team of junior developers to build a cloud-based solution — delivered on time.",
        categories: [],
        image: "",
        imageAltText: ""
    },
    {
        title: "Faster Builds, Better Teamwork",
        description: "A development team was losing time and shipping errors because their codebase had grown too tangled to deploy reliably. I restructured it into independent modules, cutting build times by 30 minutes and eliminating deployment errors.",
        categories: [],
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
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="32px">
                {ProjectDescriptions.map(pd => (<ProjectCard {...pd} key={pd.title} />))}
            </Box>
        </section>
    )
}

export { Projects }