import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import BlogList from "../pages/Blog/BlogList";
import BlogDetail from "../pages/Blog/BlogDetail";

// New Sitemap Pages Imports
import ProductsHub from "../pages/Products/ProductsHub";
import BusSheltersPage from "../pages/Products/BusSheltersPage";
import WickerFurniturePage from "../pages/Products/WickerFurniturePage";
import DustbinsPage from "../pages/Products/DustbinsPage";
import CategoryDetail from "../pages/Products/CategoryDetail";
import SolutionsHub from "../pages/Solutions/SolutionsHub";
import SolutionsDetail from "../pages/Solutions/SolutionsDetail";
import ProjectsHub from "../pages/Projects/ProjectsHub";
import ProjectsDetail from "../pages/Projects/ProjectsDetail";
import AboutUs from "../pages/AboutUs/AboutUs";
import ResourcesHub from "../pages/Resources/ResourcesHub";
import Downloads from "../pages/Resources/Downloads";
import FAQ from "../pages/Resources/FAQ";
import Materials from "../pages/Resources/Materials";
import Contact from "../pages/Contact/Contact";
import Sustainability from "../pages/Sustainability/Sustainability";
import PrivacyPolicy from "../pages/Legal/PrivacyPolicy";

const router = createBrowserRouter([
    {
        path: "/", // Deployed at root domain
        element: <MainLayout />, // Layout wrapper
        children: [
            { path: "", element: <Home /> }, // default page
            { path: "product/:id", element: <ProductDetail /> }, // single product page
            { path: "blog", element: <BlogList /> }, // blogs collection listing
            { path: "blog/:slug", element: <BlogDetail /> }, // single blog article details
            
            // Products Sitemap Paths
            { path: "products", element: <ProductsHub /> },
            { path: "products/bus-shelters", element: <BusSheltersPage /> },
            { path: "products/wicker-furniture", element: <WickerFurniturePage /> },
            { path: "products/wicker-furniture/wicker-outdoor-products", element: <WickerFurniturePage /> },
            { path: "products/dustbins", element: <DustbinsPage /> },
            { path: "products/outdoor-dustbins", element: <DustbinsPage /> },
            { path: "products/:category", element: <CategoryDetail /> },
            { path: "products/:category/:subcategory", element: <CategoryDetail /> },
            
            // Solutions Sitemap Paths
            { path: "solutions", element: <SolutionsHub /> },
            { path: "solutions/:vertical", element: <SolutionsDetail /> },
            
            // Projects Sitemap Paths
            { path: "projects", element: <ProjectsHub /> },
            { path: "projects/:segment", element: <ProjectsDetail /> },
            
            // About Us Sitemap Path
            { path: "about-us", element: <AboutUs /> },
            
            // Resources Sitemap Paths
            { path: "resources", element: <ResourcesHub /> },
            { path: "resources/downloads", element: <Downloads /> },
            { path: "faq", element: <FAQ /> },
            { path: "materials", element: <Materials /> },
            
            // Contact & Scope Quote Builder Paths
            { path: "contact", element: <Contact /> },
            { path: "get-quote", element: <Contact /> },
            
            // Supporting SEO & Legal Pages
            { path: "sustainability", element: <Sustainability /> },
            { path: "privacy-policy", element: <PrivacyPolicy /> }
        ],
    },
]);

export default router;
