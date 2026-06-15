import React, { useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const CarShelterPage = () => {
    useEffect(() => {
        updatePageSEO({
            title: "Car Sheds Manufacturer India | Car Parking Sheds & Carports | Urbanland Products",
            description: "Premium car parking sheds and carports in Mild Steel, Stainless Steel & Aluminium. Custom-designed for homes, apartments, townships & commercial spaces. India’s only 2-Year Guarantee. Fast delivery & professional installation.",
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

export default CarShelterPage;
