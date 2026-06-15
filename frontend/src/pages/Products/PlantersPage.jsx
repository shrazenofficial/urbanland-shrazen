import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const PlantersPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Planters Manufacturer India | Outdoor & Garden Planters | Urbanland Products",
            description: "Premium outdoor planters, garden planters, balcony planters and large commercial planters in Mild Steel, Stainless Steel & powder-coated finish. Durable, stylish and low-maintenance. India’s only 2-Year Guarantee.",
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

export default PlantersPage;
