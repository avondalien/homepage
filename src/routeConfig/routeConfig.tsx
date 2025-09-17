import { Route, Routes } from "react-router"
import {Home} from '../pages'


const RouteConfig = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>          
    )
}

export { RouteConfig }