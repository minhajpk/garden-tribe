import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Roots from "../Roots/Roots";
import Home from "../../Pages/Home";
import Login from "../Login";
import SignUp from "../SignUp";
import ShareGardenTips from "../../Pages/ShareGardenTips";
import ErrorPages from "../../Pages/ErrorPages";
import MyTips from "../../Pages/MyTips";
import BrowesTips from "../../Pages/BrowesTips";
import ExploreGardeners from "../../Pages/ExploreGardeners";
import PrivateRoutes from "./PrivateRoutes";
import DetailsPage from "../../Pages/DetailsPage";
import UpdataPage from "../../Pages/UpdataPage";
import contact from "../../Pages/contact";
import Terms from "../../Pages/Terms";
import About from "../../Pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <ErrorPages></ErrorPages>,

        children: [{

            index: true,
            loader: async () => {
                const gardenersRes = await fetch("http://localhost:3000/gardeners");
                const tipsRes = await fetch("http://localhost:3000/tips");

                const gardeners = await gardenersRes.json();
                const tips = await tipsRes.json();

                return { gardeners, tips };
            },
            Component: Home
        },
        {
            path: "/login",
            Component: Login
        },
        {
            path: "/sign-up",
            Component: SignUp

        },
        {
            path: "/share-garden-tips",
            element: <PrivateRoutes><ShareGardenTips></ShareGardenTips></PrivateRoutes>
        },
        {
            path: "/my-tips",
            element: <PrivateRoutes><MyTips></MyTips></PrivateRoutes>
        },
        {
            path: "/browes-tips",
            loader: () => fetch('http://localhost:3000/tips'),
            Component: BrowesTips
        },
        {
            path: "/explore-gardeners",
            loader: () => fetch('http://localhost:3000/gardeners'),
            Component: ExploreGardeners
        },
        {
            path: "/tip-details/:id",
            loader: ({ params }) => fetch(`http://localhost:3000/tips/${params.id}`),
            element: <PrivateRoutes> <DetailsPage></DetailsPage> </PrivateRoutes>
        },
        {
            path: "/update-tips/:id",
            loader: ({ params }) => fetch(`http://localhost:3000/tips/${params.id}`),
            Component: UpdataPage
        },
        {
            path: '/contact',
            Component: contact
        },
        {
            path: '/terms-and-condition',
            Component: Terms
        },
        {
            path: '/about-us',
            Component: About
        }
        ]
    },
]);