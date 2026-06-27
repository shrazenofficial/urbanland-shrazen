import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import RootErrorBoundary from "../components/RootErrorBoundary";
import Home from "../pages/Home/Home";
import HomeOld from "../pages/Home/backup/HomeOld";
import BlogList from "../pages/Blog/BlogList";
import BlogDetail from "../pages/Blog/BlogDetail";

// New Sitemap Pages Imports
import ProductsHub from "../pages/Products/ProductsHub";
import BusSheltersPage from "../pages/Products/BusSheltersPage";
import WickerFurniturePage from "../pages/Products/WickerFurniturePage";
import DustbinsPage from "../pages/Products/DustbinsPage";
import CategoryDetail from "../pages/Products/CategoryDetail";
import Catalogue from "../pages/Products/Catalogue";
import ProductAdmin from "../pages/Admin/ProductAdmin";

// Newly Generated Product Pages
import AluminiumBenchesPage from "../pages/Products/AluminiumBenchesPage";
import BenchesPage from "../pages/Products/BenchesPage";
import CabanasPage from "../pages/Products/CabanasPage";
import CanteenTablesPage from "../pages/Products/CanteenTablesPage";
import CarSheltersPage from "../pages/Products/CarSheltersPage";
import IndoorFurniturePage from "../pages/Products/IndoorFurniturePage";
import MetalWoodenFurniturePage from "../pages/Products/MetalWoodenFurniturePage";
import PlantersPage from "../pages/Products/PlantersPage";
import PoolsideLoungersPage from "../pages/Products/PoolsideLoungersPage";
import SSBollardsPage from "../pages/Products/SSBollardsPage";
import WickerOutdoorProductsPage from "../pages/Products/WickerOutdoorProductsPage";
import PergolasPage from "../pages/Products/PergolasPage";
import GazebosPage from "../pages/Products/GazebosPage";
import PreFabHomesPage from "../pages/Products/PreFabHomesPage";
import WickerLivingSetsPage from "../pages/Products/WickerLivingSetsPage";
import WickerDiningSetsPage from "../pages/Products/WickerDiningSetsPage";

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
import StyleGuide from "../pages/StyleGuide/StyleGuide";

const router = createBrowserRouter([
    {
        path: "/", // Deployed at root domain
        element: <MainLayout />, // Layout wrapper
        errorElement: <RootErrorBoundary layout={false} />, // Catch all layout/global level errors full-screen
        children: [
            {
                // Pathless nested route to trap page-level errors inside the layout
                errorElement: <RootErrorBoundary layout={true} />,
                children: [
                    { path: "", element: <Home /> }, // default page
                    { path: "home-old", element: <HomeOld /> },
                    { path: "blog", element: <BlogList /> }, // blogs collection listing
                    { path: "blog/:slug", element: <BlogDetail /> }, // single blog article details
                    
                    // Products Sitemap Paths
                    { path: "products", element: <ProductsHub /> },
                    { path: "products/all", element: <Catalogue /> },
                    { path: "catalogue", element: <Catalogue /> },
                    { path: "admin", element: <ProductAdmin /> },
                    { path: "products/bus-shelters", element: <BusSheltersPage /> },
                    { path: "products/wicker-furniture", element: <WickerFurniturePage /> },
                    { path: "products/wicker-furniture/wicker-outdoor-products", element: <WickerOutdoorProductsPage /> },
                    { path: "products/dustbins", element: <DustbinsPage /> },
                    { path: "products/outdoor-dustbins", element: <DustbinsPage /> },
                    { path: "products/benches/aluminium-benches", element: <AluminiumBenchesPage /> },
                    { path: "products/benches", element: <BenchesPage /> },
                    { path: "products/wpc-benches", element: <BenchesPage /> },
                    { path: "products/cabanas", element: <CabanasPage /> },
                    { path: "products/canteen-tables", element: <CanteenTablesPage /> },
                    { path: "products/canteen-furniture", element: <CanteenTablesPage /> },
                    { path: "products/car-shelters", element: <CarSheltersPage /> },
                    { path: "products/car-parking-sheds", element: <CarSheltersPage /> },
                    { path: "products/car-sheds", element: <CarSheltersPage /> },
                    { path: "products/indoor-furniture", element: <IndoorFurniturePage /> },
                    { path: "products/metal-wooden-furniture", element: <MetalWoodenFurniturePage /> },
                    { path: "products/planters", element: <PlantersPage /> },
                    { path: "products/poolside-loungers", element: <PoolsideLoungersPage /> },
                    { path: "products/poolside-furniture", element: <PoolsideLoungersPage /> },
                    { path: "products/ss-bollards", element: <SSBollardsPage /> },
                    { path: "products/wicker-outdoor-products", element: <WickerOutdoorProductsPage /> },
                    { path: "products/wicker-living-sets", element: <WickerLivingSetsPage /> },
                    { path: "products/wicker-dining-sets", element: <WickerDiningSetsPage /> },
                    { path: "products/pergolas", element: <PergolasPage /> },
                    { path: "products/gazebos", element: <GazebosPage /> },
                    { path: "products/pre-fab-homes", element: <PreFabHomesPage /> },
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
                    { path: "privacy-policy", element: <PrivacyPolicy /> },
                    { path: "style-guide", element: <StyleGuide /> }
                ]
            }
        ],
    },
]);

export default router;
