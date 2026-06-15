import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const BusShelter_Page = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Bus Shelter Manufacturer India | Bus Stop Shelters | Urbanland Products",
            description: "High-quality bus stop shelters in Mild Steel, Stainless Steel & Aluminium. Designed for Indian weather, smart cities & municipalities. 2-Year Guarantee, custom sizes & fast installation.",
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

export default BusShelter_Page;
