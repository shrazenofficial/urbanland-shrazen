import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const PoolsideLoungersPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Poolside Loungers Manufacturer India | Luxury Outdoor Daybeds & Chaise Loungers | Urbanland",
            description: "Premium poolside loungers and outdoor daybeds in India. Weather-resistant synthetic wicker, aluminium frames and comfortable cushions. Perfect for pools, resorts, gardens, townships and luxury homes. Backed by India’s only 2-Year Guarantee.",
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

export default PoolsideLoungersPage;
