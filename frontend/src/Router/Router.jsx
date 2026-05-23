import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import BlogList from "../pages/Blog/BlogList";
import BlogDetail from "../pages/Blog/BlogDetail";

const router = createBrowserRouter([
    {
        path: "/", // Deployed at root domain
        element: <MainLayout />, // Layout wrapper
        children: [
            { path: "", element: <Home /> }, // default page
            { path: "product/:id", element: <ProductDetail /> }, // single product page
            { path: "blog", element: <BlogList /> }, // blogs collection listing
            { path: "blog/:slug", element: <BlogDetail /> } // single blog article details
        ],
    },
]);

export default router;
