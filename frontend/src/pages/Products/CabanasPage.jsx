import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const CabanasPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Cabanas Manufacturer India | Luxury Outdoor & Poolside Cabanas | Urbanland",
            description: "Premium luxury cabanas for pools, gardens, resorts, townships and commercial spaces. Available in Mild Steel, Stainless Steel, Aluminium & WPC. Stylish, durable and weather-resistant. Backed by India’s only 2-Year Guarantee.",
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

export default CabanasPage;
