import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const MetalWoodenFurniturePage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Metal Wooden Furniture Manufacturer India | Outdoor Benches, Car Sheds, Bus Shelters & More | Urbanland",
            description: "Premium metal wooden outdoor furniture in India. Outdoor benches, car sheds, bus shelters, street planters, canteen tables, outdoor dustbins and more. Strong metal frames combined with natural wood for durability and elegance. Backed by India’s only 2-Year Guarantee.",
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

export default MetalWoodenFurniturePage;
