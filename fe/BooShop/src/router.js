import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/homePage";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";

const RenderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            Component: <HomePage />
        },
        {
            path: ROUTERS.USER.INFO,
            Component: <ProfilePage />
        },
    ]
    return (
        <MasterLayout>
        <Routes>
            {userRouter.map((route, index) => (
                <Route key={index} path={route.path} element={route.Component} />
            ))}
        </Routes>
        </MasterLayout>
    )
} 

const RouterCustom = () => {
    return RenderUserRouter();
}

export default RouterCustom;