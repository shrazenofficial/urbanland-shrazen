import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const AluminiumBenchesPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Aluminium Benches Manufacturer India | Outdoor & Park Aluminium Benches | Urbanland",
            description: "Premium Aluminium Benches for parks, gardens, townships and commercial spaces. Lightweight, corrosion-resistant, modern design and low-maintenance. Backed by India’s only 2-Year Guarantee.",
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

export default AluminiumBenchesPage;
