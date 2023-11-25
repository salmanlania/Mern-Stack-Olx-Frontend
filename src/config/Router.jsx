import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Navbar from "../component/Navbar.jsx";
import Home from "../component/Home.jsx";
import About from "../component/About.jsx";
import Contact from "../component/Contact.jsx";
import Listing from "../component/Listing.jsx";
import ListingDetail from "../component/ListingDetail.jsx";
import Login from "../component/Login.jsx";
import Signup from "../component/Signup.jsx";
import PostAdd from "../component/PostAdd.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/listing",
                element: <Listing />,
            },
            {
                path: '/listing/:listing_id',
                element: <ListingDetail />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/post-add",
                element: <PostAdd />,
            },
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (

        <div >
            <Navbar />
            <Outlet />
        </div>

    )
}
// Main()
export default Router