import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { OfferingCard } from "./OfferingCard"

const offerings = [
    {
        title: "Get Online",
        description: "A custom, mobile-first website that speaks your customers' language — literally. Built to showcase everything your business has to offer.",
    },
    {
        title: "Automate Something",
        description: "Lead capture forms, online ordering, scheduling, calendar integrations — if there's a manual process slowing your business down, there's probably a better way.",
    },
    {
        title: "Ongoing Support",
        description: "Things break. Needs change. I offer ongoing support so you always have someone local to call — not a support ticket.",
    },
    {
        title: "Get a Second Opinion",
        description: "Already working with a vendor but struggling to hold them to account? I bring enterprise project management experience to help small businesses navigate large software implementations — keeping vendors on track, scopes realistic, and projects moving.",
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
                    gap="32px"
                >
                    {offerings.map((o) => (<OfferingCard {...o} key={o.title}/>))}
                </Box>
        </section>
    )
}

export { Services }