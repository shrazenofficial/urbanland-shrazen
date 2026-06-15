import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const DustbinsPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Dustbins Manufacturer India | Outdoor & Commercial Dustbins | Urbanland Products",
            description: "Premium dustbins and waste bins in Mild Steel, Stainless Steel & Galvanized finish. Ideal for parks, hospitals, schools, commercial complexes, townships and smart cities. Durable, hygienic and low-maintenance. India’s only 2-Year Guarantee.",
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

export default DustbinsPage;
