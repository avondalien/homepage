import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import mentoringImg from "../../assets/img/mentoring.svg"
import projectManagementImg from "../../assets/img/project_management.svg"
import architectureImg from "../../assets/img/architecture.svg"
import devopsImg from "../../assets/img/devops.svg"
import { OfferingCard } from "./OfferingCard"
import presentationPdf from "../../assets/collaborative_software_development.pdf"

const offerings = [
    {
        title: "Software Architecture",
        description: "We organize your code to confirm correctness, scale for production, and secure your hardware.",
        image: architectureImg,
        imageAltText: "",
    },
    {
        title: "Reproducible Deployments",
        description: "Helping you package your software to build and run automatically on your equipment or the cloud.",
        image: devopsImg,
        imageAltText: "",
    },
    {
        title: "Software Project Management",
        description: "We break down system requirements and provide realistic implementation timelines so you can spend more time on your research.",
        image: projectManagementImg,
        imageAltText: "",
    },
    {
        title: "Mentorship",
        description: "We guide student programmers to build more robust software through exposure to engineering best practices, frameworks, and code review.",
        image: mentoringImg,
        imageAltText: "",
        linkText: "Qubithub Fall Fest Presentation to New Collaborators",
        linkTarget: presentationPdf
    },
]

const Services = () => {

    return (
        <section id="services">
            <Typography variant="h4">
                    Services
                </Typography>
                <Box 
                    display="flex" 
                    flexDirection="row" 
                    flexWrap="wrap" 
                    justifyContent="space-between"
                >
                    {offerings.map(o => (<OfferingCard {...o} key={o.title}/>))}
                </Box>
        </section>
    )
}

export { Services }