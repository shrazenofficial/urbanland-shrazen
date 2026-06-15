import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const WickerOutdoorProductsPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Wicker Outdoor Products India | Cabanas, Poolside Loungers, Wicker Living & Dining Sets | Urbanland",
            description: "Premium wicker outdoor products including cabanas, poolside loungers, wicker living sets and wicker dining sets. Stylish, durable, weather-resistant and low-maintenance. Perfect for gardens, patios, resorts, townships and commercial spaces. Backed by India’s only 2-Year Guarantee.",
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

export default WickerOutdoorProductsPage;
