import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const CanteenTablesPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Canteen Tables Manufacturer India | Cafeteria & Dining Tables | Urbanland Products",
            description: "Premium canteen tables and cafeteria tables in Mild Steel, Stainless Steel & powder-coated finish. Ideal for schools, colleges, factories, offices, hospitals & hostels. 2-Year Guarantee. Durable, stylish & hygienic.",
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

export default CanteenTablesPage;
