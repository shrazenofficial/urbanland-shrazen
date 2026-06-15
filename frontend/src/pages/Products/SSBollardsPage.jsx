import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const SSBollardsPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "SS Bollards Manufacturer India | Stainless Steel Bollards for Traffic & Urban Safety | Urbanland",
            description: "Premium Stainless Steel (SS 304 / SS 316) bollards in India. Fixed, removable and decorative bollards for traffic control, pedestrian safety, parking management and streetscaping. Corrosion-resistant, durable and elegant. Backed by India’s only 2-Year Guarantee.",
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

export default SSBollardsPage;
