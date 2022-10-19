import React from "react";
import EventPage from "../pages/EventPage";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import PageAccessDenied from "../pages/PageAccessDenied";

export interface IRoute {
    path: string;
    element: React.ElementType;
}

export enum RouteNames {
    LOGIN = "/login",
    EVENT_PAGE = "/",
    PAGE_ANY = "/*",
}

export const routesPublic: IRoute[] = [
    { path:RouteNames.LOGIN,    element: Login },
    { path:RouteNames.PAGE_ANY, element: PageAccessDenied },
];
export const routesPrivate: IRoute[] = [
    { path:RouteNames.EVENT_PAGE, element: EventPage },
    { path:RouteNames.PAGE_ANY,   element: PageNotFound },
];
