import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import mentoringImg from "../../assets/img/mentoring.svg"
import projectManagementImg from "../../assets/img/project_management.svg"
import architectureImg from "../../assets/img/architecture.svg"
import devopsImg from "../../assets/img/devops.svg"
import { OfferingCard } from "./OfferingCard"

const offerings = [
    {
        title: "Get Online",
        description: "A custom, mobile-first website that speaks your customers' language — literally. Built to showcase everything your business has to offer.",
        image: architectureImg,
        imageAltText: "A diagram representing a website being built",
    },
    {
        title: "Automate Something",
        description: "Lead capture forms, online ordering, scheduling, calendar integrations — if there's a manual process slowing your business down, there's probably a better way.",
        image: projectManagementImg,
        imageAltText: "Gears representing business automation",
    },
    {
        title: "Ongoing Support",
        description: "Things break. Needs change. I offer ongoing support so you always have someone local to call — not a support ticket.",
        image: mentoringImg,
        imageAltText: "A person representing personal, local support",
    },
    {
        title: "Get a Second Opinion",
        description: "Already working with a vendor but struggling to hold them to account? I bring enterprise project management experience to help small businesses navigate large software implementations — keeping vendors on track, scopes realistic, and projects moving.",
        image: devopsImg,
        imageAltText: "A person representing guidance and advice",
    }
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