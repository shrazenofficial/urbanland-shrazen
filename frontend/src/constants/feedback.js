export const testimonials = [
    {
        quote: "Urbanland® outdoor furniture elevated our township's luxury index — modern design, durable WPC benches, and stunning cabanas that our premium residents absolutely love.",
        author: "Rohan Mehta",
        role: "Director, Prestige Group",
        location: "Bengaluru",
        rating: 5,
        project: "Prestige Lakeshore Drive",
        avatarLetter: "R"
    },
    {
        quote: "Partnering with India's premium outdoor furniture manufacturer was key for our poolside. Sleek, weather-proof wicker sets that perfectly match our luxury design language.",
        author: "Priya Sharma",
        role: "VP Design, Taj Resorts",
        location: "Goa",
        rating: 5,
        project: "Taj Exotica Resort & Spa",
        avatarLetter: "P"
    },
    {
        quote: "The heavy-duty concrete planters and smart public shelters transformed our Smart City walkways. Exceptional strength, vandal-resistant, and built for the absolute highest footfall.",
        author: "Dr. Amit Verma",
        role: "Chief Planner, Smart Cities Council",
        location: "Delhi NCR",
        rating: 5,
        project: "Lutyens Smart Walkways",
        avatarLetter: "A"
    },
    {
        quote: "Urbanland's attention to detail and material quality is unparalleled in the Indian market. Their furniture didn't just meet our specifications; it elevated the entire landscape project. Truly a partner for permanence.",
        author: "Ar. Sanjay Deshpande",
        role: "Principal Architect, S.D. Associates",
        location: "Mumbai",
        rating: 5,
        project: "S.D. Office Campus",
        avatarLetter: "S"
    },
    {
        quote: "For our high-profile luxury residential projects, material durability is non-negotiable. Urbanland's customized architectural benches stood the test of heavy monsoons while retaining their premium finish.",
        author: "Vikram Oberoi",
        role: "Senior VP Landscape, Oberoi Realty",
        location: "Mumbai",
        rating: 5,
        project: "Oberoi Garden City",
        avatarLetter: "V"
    }
];

// Retain old structures for backup compatibility
export const feedbackH1LG = testimonials.map(t => [t.quote]);
export const feedbackReviewLG = testimonials.map((t, idx) => [
    t.author,
    `${t.role} (${t.location})`,
    `review${(idx % 3) + 1}`,
    `${((idx + 1) / testimonials.length) * 100}%`
]);