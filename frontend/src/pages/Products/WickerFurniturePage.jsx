import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const WickerFurniturePage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Wicker Furniture Manufacturer India | Outdoor Wicker Sets, Loungers, Cabanas & Benches | Urbanland",
            description: "Premium wicker outdoor furniture in India. Wicker sofa sets, dining sets, poolside loungers, cabanas, WPC benches, aluminium benches and GFRC benches. Stylish, durable, weather-resistant and low-maintenance. Backed by India’s only 2-Year Guarantee.",
            og_type: "product"
        });
        return () => cleanPageSEO();
    }, []);

    return (
        <div className="w-full min-h-[60vh] bg-surface flex items-center justify-center">
            {/* Just header and footer will be present */}
        </div>
    );
};

export default WickerFurniturePage;
