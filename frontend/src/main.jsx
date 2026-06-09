import "./lib/gsap-register"; // One-time GSAP plugin registration (must be first)
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// --- GLOBAL DRAG-TO-SCROLL FOR ALL SLIDERS ---
if (typeof window !== "undefined" && typeof document !== "undefined") {
  // Prevent browser's default image drag ghost preview to allow custom drag-to-scroll
  document.addEventListener("dragstart", (e) => {
    if (e.target.closest(".overflow-x-auto")) {
      e.preventDefault();
    }
  });

  document.addEventListener("mousedown", (e) => {
    // Find the closest parent that has horizontal overflow scrolling
    const scrollContainer = e.target.closest(".overflow-x-auto");
    if (!scrollContainer) return;

    // Prevent drag-to-scroll on text inputs, selects, and textareas where text selection/focus is needed
    if (e.target.closest("input, select, textarea")) return;

    let isDown = true;
    let startX = e.pageX - scrollContainer.offsetLeft;
    let scrollLeft = scrollContainer.scrollLeft;
    let hasMoved = false;

    scrollContainer.style.cursor = "grabbing";
    
    // Temporarily disable smooth scrolling during drag to prevent drag lag
    const originalScrollBehavior = scrollContainer.style.scrollBehavior;
    scrollContainer.style.scrollBehavior = "auto";

    const onMouseMove = (moveEvent) => {
      if (!isDown) return;
      
      // Calculate delta
      const x = moveEvent.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag speed multiplier
      
      if (Math.abs(walk) > 5) {
        hasMoved = true;
      }
      
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const onMouseUpOrLeave = () => {
      isDown = false;
      scrollContainer.style.cursor = "grab";
      scrollContainer.style.scrollBehavior = originalScrollBehavior;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUpOrLeave);
      document.removeEventListener("mouseleave", onMouseUpOrLeave);

      // If dragging occurred, intercept next click to prevent routing/actions
      if (hasMoved) {
        const preventClick = (clickEvent) => {
          clickEvent.preventDefault();
          clickEvent.stopPropagation();
          scrollContainer.removeEventListener("click", preventClick, true);
        };
        scrollContainer.addEventListener("click", preventClick, true);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUpOrLeave);
    document.addEventListener("mouseleave", onMouseUpOrLeave);
  });
}