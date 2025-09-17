import { Route, Routes } from "react-router"
import {Home, About} from '../pages'


const RouteConfig = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>          
    )
}

export { RouteConfig }