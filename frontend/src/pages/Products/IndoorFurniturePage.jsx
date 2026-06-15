import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const IndoorFurniturePage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Indoor Furniture Manufacturer India | Metal Wooden & Wicker Indoor Furniture | Urbanland",
            description: "Premium indoor furniture in India. Metal wooden indoor tables, chairs, benches, canteen furniture and wicker indoor living & dining sets. Durable, stylish and low-maintenance solutions for homes, offices, cafes, hotels and institutions. Backed by India’s only 2-Year Guarantee.",
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

export default IndoorFurniturePage;
