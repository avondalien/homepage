import Stack from "@mui/material/Stack"
import { Contact } from "./Contact"
import { Services } from "./Services"
import { Hero } from "./Hero"
import { About } from "./About"
import { Projects } from "./Projects"

const Home = () => {
    return (
        <main>
        <Stack spacing={4}>
            <Hero />
            <Services />
            <Projects />
            <About />
            <Contact />
        </Stack>
        </main>
    )
}

export { Home }