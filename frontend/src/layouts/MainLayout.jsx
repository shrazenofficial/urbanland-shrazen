import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { initLenis } from "../lib/lenis";
import PreloaderII from "../components/Preloader/PreloaderII";
import ReserveBtn from "../components/Buttons/ReserveBtn";
import Logo from "../components/Buttons/Logo";
import Footer from "../components/Footer/Footer";
import FooterTitle from "../components/Footer/FooterTitle";

const MainLayout = () => {

    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = initLenis();

        // Synchronize Lenis scrolling frame updates directly inside GSAP ticker
        const updateScroll = () => {
            lenis.raf(performance.now());
        };

        gsap.ticker.add(updateScroll);
        gsap.ticker.lagSmoothing(0);

        // Update ScrollTrigger on scroll events
        lenis.on("scroll", ScrollTrigger.update);

        // Delay initial refresh to let Lenis sync and initial layout settle
        const initialRefresh = setTimeout(() => {
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
        }, 300);

        // 1. Refresh when all assets and images finish loading
        const handleLoad = () => {
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
        };
        window.addEventListener("load", handleLoad);

        // 2. ResizeObserver to detect layout height changes (e.g. dynamic images)
        let refreshTimeout;
        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(refreshTimeout);
            refreshTimeout = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 200);
        });
        resizeObserver.observe(document.body);

        return () => {
            gsap.ticker.remove(updateScroll);
            clearTimeout(initialRefresh);
            window.removeEventListener("load", handleLoad);
            resizeObserver.disconnect();
            clearTimeout(refreshTimeout);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <PreloaderII />
            <Logo />
            <ReserveBtn />
            <Navbar />
            <main>
                <Outlet /> {/* Hero, About, Contact, etc. */}
                <Footer />
                <FooterTitle />
            </main>
        </>
    );
};

export default MainLayout;