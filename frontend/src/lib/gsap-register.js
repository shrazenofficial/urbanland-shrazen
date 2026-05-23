/**
 * Centralized GSAP Plugin Registration
 * Import this file ONCE in main.jsx — all plugins are registered globally.
 * Individual components should NOT call gsap.registerPlugin() themselves.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);
