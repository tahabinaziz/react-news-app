import React from "react";
import { AppRoute } from "./routes";
import { Route, Routes } from 'react-router-dom';

import Dashboard from "../../pages/search/News";



import ProtectedRoute from "./ProtectedRoute";
import Page404 from "../../pages/login/page404.js";
import LoginUser from "../../pages/login/user";
import NYT from "../../pages/search/NYT";
import Guardian from "../../pages/search/Guardian";
import ForgetPassword from "../../pages/register/register";
import Register from "../../pages/register/register";
const routing = [

    {
        appRoute: AppRoute.NYT,
        component: NYT
    },
    {
        appRoute: AppRoute.Guardian,
        component: Guardian
    },
    {
        appRoute: AppRoute.Dashboard,
        component: Dashboard
    },
    
    {
        appRoute: AppRoute.Page404,
        component: Page404
    },
    {
        appRoute: AppRoute.LoginUser,
        component: LoginUser
    },
    {
        appRoute: AppRoute.Register,
        component: Register
    }

]

const AppRouter = () => {
    return (
        <Routes>

             <Route path={"/dashboard"} element={<Dashboard />} ></Route>
             <Route path={"/login"} element={<LoginUser />} ></Route>
            <Route path={"/NewsAPI"} element={<Dashboard />} ></Route>
            <Route path={"/NYT"} element={<NYT />} ></Route>
            <Route path={"/"} element={<Guardian />} ></Route>
            <Route path={"/register"} element={<Register />} ></Route>
            <Route path="*" element={<Page404 />} ></Route>
            
            <Route element={<ProtectedRoute />}>

                {routing.map((i, index) => {
                    return (
                        <Route path={i.appRoute} key={index + 1} element={<i.component />} ></Route>
                    )
                })}
            </Route>
        </Routes>
    )
}
export default AppRouter;