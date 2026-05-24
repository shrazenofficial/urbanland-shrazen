import { products as localProducts } from "../constants/productsData";

// Resolve WordPress base URL from env variables
const WP_BASE_URL = import.meta.env.VITE_WP_API_URL || "https://backend.urbanlandproducts.com";

// Fallback high-fidelity blog posts in case WordPress is unconfigured or offline
const fallbackPosts = [
  {
    id: 101,
    slug: "reclaiming-parking-spaces-for-modular-parklets",
    title: { rendered: "Reclaiming Parking Spaces: The Rise of Modular Parklets" },
    excerpt: { rendered: "How city planners are transforming curbside parking lanes into lush urban terraces, fostering community interactions and supporting local cafes." },
    content: { rendered: `
      <p>In the heart of modern cities, space is the ultimate currency. For decades, streets have been dominated by single-occupant vehicles and static parking lanes. Today, a visionary urban design movement is reclaiming these asphalt corridors, transforming curbside parking spaces into mini-terrace gardens, benches, and outdoor seating—commonly known as <strong>parklets</strong>.</p>
      
      <h3>The Genesis of Curbside Reclamation</h3>
      <p>Parklets originated as tactical urban interventions—temporary installations designed to spark conversation about street ownership. By replacing a standard 6x2 meter parking space with wooden decks, planter pots, and public seating, architects quickly proved that a single parking bay could serve hundreds of pedestrians daily instead of just two or three private cars.</p>
      
      <blockquote>"By converting parking stalls into parklets, we prioritize human encounters, neighborhood vitality, and green infrastructure over vehicle storage."</blockquote>

      <h3>Key Engineering and Design Constraints</h3>
      <p>Designing high-performance street furniture like our <strong>PLATFORM</strong> cultivation island requires addressing specific structural and logistical challenges:</p>
      <ul>
        <li><strong>Curbside Drainage:</strong> Furniture frames must be elevated on structural steel chassis to allow rainwater runoff to flow freely underneath without clogging street gutters.</li>
        <li><strong>Structural Leveling:</strong> Curbside cross-slopes vary wildly. Integrated leveling feet are essential to ensure wood deck surfaces remain completely horizontal and safe.</li>
        <li><strong>Modular Versatility:</strong> Because municipal codes change and seasonal events require flexibility, components should be bolt-together, allowing simple layout reconfigurations.</li>
      </ul>

      <h3>The Sustainable Streetscape</h3>
      <p>Fostering pedestrian activity directly correlates with increased retail sales for adjacent businesses. More importantly, introducing bio-diverse planter boxes clad in FSC-certified timbers (like tropical Jatoba) helps mitigate urban heat island effects. Parklets aren't just aesthetic seating; they are the modular building blocks of future walkable, human-centric cities.</p>
    ` },
    date: "2026-05-18T10:00:00",
    author_name: "Aarav Sharma",
    category_names: ["Urban Planning", "Sustainability"],
    featured_image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    yoast_head_json: {
      title: "Reclaiming Parking Spaces: The Rise of Modular Parklets | Urbanland",
      description: "Discover how cities are transforming static curbside parking lanes into vibrant, green modular parklets for walkable, human-centric urban living.",
      og_title: "Reclaiming Parking Spaces: The Rise of Modular Parklets",
      og_description: "Curbside reclamation transforms static parking bays into public terraces. Learn about our modular PLATFORM street furniture.",
      og_image: [{ url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80" }],
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Reclaiming Parking Spaces: The Rise of Modular Parklets",
        "description": "Discover how cities are transforming static curbside parking lanes into vibrant, green modular parklets for walkable, human-centric urban living.",
        "image": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-05-18T10:00:00",
        "author": {
          "@type": "Person",
          "name": "Aarav Sharma"
        }
      }
    }
  },
  {
    id: 102,
    slug: "sustainably-sourced-materials-for-public-furniture",
    title: { rendered: "Choosing the Right Timber: Sustainably Sourced Materials for Public Spaces" },
    excerpt: { rendered: "An in-depth look at why wood selection matters for public street furniture, evaluating FSC certification, natural oils, weathering, and life-cycle durability." },
    content: { rendered: `
      <p>Street furniture stands on the front line of environmental exposure. From blistering summer heat to monsoons and high foot-traffic, materials must be selected with extreme lifecycle durability in mind. But engineering resilience is only half the battle—we must also preserve the forests our timbers are harvested from.</p>
      
      <h3>The Significance of FSC® Certification</h3>
      <p>FSC (Forest Stewardship Council) certification guarantees that wood is harvested from forests managed in a way that preserves biological diversity, benefits local workers, and maintains economic viability. For premium outdoor installations like the <strong>LINFA</strong> bench series, utilizing FSC-certified tropical Jatoba or Robinia wood ensures our brand footprint is biologically neutral.</p>

      <h3>Robinia vs. Jatoba: Performance Characteristics</h3>
      <table class="wp-block-table border border-black/10 w-full text-left my-4">
        <thead>
          <tr class="bg-black/5 text-xs font-bold uppercase">
            <th class="p-3">Timber Type</th>
            <th class="p-3">Density & Hardness</th>
            <th class="p-3">Weathering Color</th>
            <th class="p-3">Best Suited For</th>
          </tr>
        </thead>
        <tbody class="text-xs">
          <tr class="border-t border-black/5">
            <td class="p-3 font-semibold">Jatoba FSC®</td>
            <td class="p-3">Extremely high (1190 kg/m³)</td>
            <td class="p-3">Deep red-brown to silver gray</td>
            <td class="p-3">High-traffic public seating, decks</td>
          </tr>
          <tr class="border-t border-black/5">
            <td class="p-3 font-semibold">Robinia (Black Locust)</td>
            <td class="p-3">High (730 kg/m³)</td>
            <td class="p-3">Warm golden-brown to light gray</td>
            <td class="p-3">Pergolas, modular cladding</td>
          </tr>
        </tbody>
      </table>

      <h3>Natural Oils vs. Unrefined Silver Patina</h3>
      <p>When exposed to outdoor UV radiation and rain, all natural timbers slowly weather, turning a uniform, elegant silver-gray patina. While some landscape architects specify regular coating with natural protective oils to preserve original reddish hues, leaving wood untreated allows the material to age organically, blending seamlessly into historical or woodland settings.</p>
    ` },
    date: "2026-05-12T14:30:00",
    author_name: "Priyanka Patel",
    category_names: ["Materials", "Eco-design"],
    featured_image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    yoast_head_json: {
      title: "Choosing the Right Timber: Sustainably Sourced Materials | Urbanland",
      description: "An evaluation of FSC-certified timbers (Jatoba and Robinia) for high-performance public street furniture, analyzing durability and environmental impact.",
      og_title: "Choosing the Right Timber: Sustainably Sourced Materials for Public Spaces",
      og_description: "timber selection matters for public street furniture. Learn about FSC certification, Robinia, and Jatoba weathering.",
      og_image: [{ url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" }],
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Choosing the Right Timber: Sustainably Sourced Materials for Public Spaces",
        "description": "An evaluation of FSC-certified timbers (Jatoba and Robinia) for high-performance public street furniture, analyzing durability and environmental impact.",
        "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-05-12T14:30:00",
        "author": {
          "@type": "Person",
          "name": "Priyanka Patel"
        }
      }
    }
  },
  {
    id: 103,
    slug: "smart-city-shelters-rethinking-public-transit-hubs",
    title: { rendered: "Smart City Shelters: Rethinking Public Transit Hubs" },
    excerpt: { rendered: "How smart bus shelters equipped with solar PV roofs, dynamic e-paper transit feeds, and integrated green systems are rewriting city commutes." },
    content: { rendered: `
      <p>The standard bus shelter is undergoing a radical technological and ecological evolution. Once treated purely as static concrete or glass canopies for rain protection, modern transit shelters are being re-engineered as localized micro-hubs of energy production, data communication, and urban greening.</p>
      
      <h3>Harvesting the Sun: Photovoltaic Roof Integration</h3>
      <p>By fitting shelters like our <strong>AERO</strong> transit system with overhead structural PV solar panels, cities can create self-sustaining power grids. This green energy feeds underside LED safety lights, charges internal battery packs, and powers public USB device outlets, removing the need for costly grid connection trenching.</p>

      <h3>E-Paper Displays: Real-Time Transit Data</h3>
      <p>Traditional paper timetables are quickly becoming obsolete. Ultra-low power e-paper digital schedules, fueled by internal batteries or solar cells, update routes in real-time. This increases commuter confidence and elevates accessibility across public networks.</p>

      <blockquote>"Smart shelters convert passive transit waits into productive, safe, and pleasant urban intervals."</blockquote>

      <h3>Bringing Nature to Commuters</h3>
      <p>Integrating green roofs on top of bus shelters provides natural heat insulation and filters urban rainwater. Combined with modular safety guardrails, transit shelters are no longer just utilitarian structures—they are essential assets in smart, eco-centric city planning.</p>
    ` },
    date: "2026-05-05T09:15:00",
    author_name: "Kabir Mehta",
    category_names: ["Smart Cities", "Technology"],
    featured_image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    yoast_head_json: {
      title: "Smart City Shelters: Rethinking Public Transit Hubs | Urbanland",
      description: "How smart bus shelters equipped with solar panels and real-time e-paper displays are revolutionizing municipal public transit systems.",
      og_title: "Smart City Shelters: Rethinking Public Transit Hubs",
      og_description: "Discover the technology and ecological impact of solar-powered transit shelters in modern cities.",
      og_image: [{ url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80" }],
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Smart City Shelters: Rethinking Public Transit Hubs",
        "description": "How smart bus shelters equipped with solar panels and real-time e-paper displays are revolutionizing municipal public transit systems.",
        "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-05-05T09:15:00",
        "author": {
          "@type": "Person",
          "name": "Kabir Mehta"
        }
      }
    }
  }
];

/**
 * Fetch blog posts from Headless WordPress API
 * Automatically falls back to standard mock posts if request fails or URL is empty.
 */
export const fetchPosts = async () => {
  if (!WP_BASE_URL) {
    console.log("WordPress API URL not configured. Returning fallback blogs.");
    return fallbackPosts;
  }

  try {
    const res = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?_embed`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.map((post) => parseWPPost(post));
  } catch (error) {
    console.warn("Failed to fetch posts from WordPress API. Falling back to local dataset.", error);
    return fallbackPosts;
  }
};

/**
 * Fetch a single blog post by slug from Headless WordPress API
 */
export const fetchPostBySlug = async (slug) => {
  if (!WP_BASE_URL) {
    const found = fallbackPosts.find((p) => p.slug === slug);
    return found || null;
  }

  try {
    const res = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    if (data.length === 0) {
      // Check if it's in fallback
      return fallbackPosts.find((p) => p.slug === slug) || null;
    }
    return parseWPPost(data[0]);
  } catch (error) {
    console.warn(`Failed to fetch post by slug '${slug}'. Returning fallback if present.`, error);
    return fallbackPosts.find((p) => p.slug === slug) || null;
  }
};

/**
 * Helper: Parses standard WordPress Posts (CPT fallback under categories 9/13) to match our product schema
 */
const parseWPPostToProduct = (post) => {
  // Resolve image
  let image = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80";
  if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
    image = post._embedded["wp:featuredmedia"][0].source_url;
  }

  // Gallery
  const gallery = [image];

  // Resolve clean title and line by stripping common SEO suffixes
  let rawTitle = post.title?.rendered || "";
  rawTitle = rawTitle.replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/&#8211;/g, "–");
  
  // Clean up B2B/SEO suffix patterns to make titles beautiful and clean
  let title = rawTitle
    .replace(/\s*[–|-]\s*Premium Outdoor Seating.*$/gi, "")
    .replace(/\s*[–|-]\s*Durable and Stylish.*$/gi, "")
    .replace(/\s*[–|-]\s*Transforming Open Spaces.*$/gi, "")
    .replace(/\s*[–|-]\s*Trusted WPC Bench.*$/gi, "")
    .replace(/\s*[–|-]\s*Luxury Outdoor Furniture.*$/gi, "")
    .replace(/\s*[–|-]\s*Urbanland Products.*$/gi, "")
    .replace(/\s*[–|-]\s*UrbanLand Products.*$/gi, "")
    .replace(/\s*[–|-]\s*Leading Smart City.*$/gi, "")
    .replace(/\s*[–|-]\s*Why UrbanLand Products Leads.*$/gi, "")
    .replace(/Manufacturers in India/gi, "")
    .replace(/Manufacturer in India/gi, "")
    .replace(/Manufacturers/gi, "")
    .replace(/Manufacturer/gi, "")
    .trim();

  // Make line clean
  let line = "Architectural Street Infrastructure";
  if (title.toLowerCase().includes("bench")) {
    line = "Weather-resistant seating";
  } else if (title.toLowerCase().includes("dustbin") || title.toLowerCase().includes("trash")) {
    line = "Waste management system";
  } else if (title.toLowerCase().includes("planter")) {
    line = "Landscape element";
  } else if (title.toLowerCase().includes("wicker")) {
    line = "Hand-woven luxury wicker";
  } else if (title.toLowerCase().includes("shelter")) {
    line = "Transit shelter infrastructure";
  }

  // Determine category based on categories array
  // Benches (9), Wicker (13)
  let category = "Benches";
  if (post.categories?.includes(13)) {
    category = "Wicker";
  } else if (title.toLowerCase().includes("dustbin") || title.toLowerCase().includes("trash")) {
    category = "Dustbin";
  } else if (title.toLowerCase().includes("planter")) {
    category = "Planter";
  } else if (title.toLowerCase().includes("shelter")) {
    category = "Shelters";
  }

  return {
    id: post.slug || String(post.id),
    title: title,
    line: line,
    category: category,
    image,
    gallery,
    badges: ["Featured"],
    tagline: post.excerpt?.rendered?.replace(/<[^>]*>/g, "")?.slice(0, 100)?.trim() + "..." || "Visionary design for modern environments.",
    description: post.content?.rendered || "",
    features: ["Heavy duty construction", "Anti-corrosion coating", "Sustainably sourced materials"],
    specifications: {
      materials: "Galvanized powder-coated steel combined with organic composite profiles.",
      dimensions: "Standard dimensions custom fabricated to project specifications.",
      installation: "Surface anchored with concealed chemical anchoring systems.",
      sustainability: "100% recyclable frame components with certified low carbon footprint."
    },
    options: {
      wood: ["Jatoba FSC®", "Robinia", "Acacia"],
      metal: ["Anthracite Grey (RAL 7016)", "Corten Texture", "Warm Sand"],
      modules: ["Base Unit", "Side Extension"]
    },
    yoast_head_json: post.yoast_head_json || null
  };
};

/**
 * Fetch products from Headless WordPress API
 * Queries WooCommerce REST API, WordPress CPT products, or falls back to Posts categories 9/13.
 * Falls back to our local high-fidelity products list if all fetch routes are unconfigured or fail.
 */
export const fetchProducts = async () => {
  // Bypassed WordPress fetch per user request to use local static catalog with background-removed assets
  return localProducts;
};

/**
 * Helper: Parses standard WP REST API post object to match our frontend schema
 */
const parseWPPost = (post) => {
  // Extract author
  let author_name = "Urbanland Contributor";
  if (post._embedded?.author?.[0]?.name) {
    author_name = post._embedded.author[0].name;
  }

  // Extract featured image
  let featured_image = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80";
  if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
    featured_image = post._embedded["wp:featuredmedia"][0].source_url;
  }

  // Extract categories
  let category_names = [];
  if (post._embedded?.["wp:term"]?.[0]) {
    category_names = post._embedded["wp:term"][0].map((t) => t.name);
  }

  return {
    id: post.id,
    slug: post.slug,
    title: { rendered: post.title?.rendered || "" },
    excerpt: { rendered: post.excerpt?.rendered || "" },
    content: { rendered: post.content?.rendered || "" },
    date: post.date,
    author_name,
    category_names,
    featured_image,
    yoast_head_json: post.yoast_head_json || null
  };
};

/**
 * Helper: Parses standard WordPress Custom Post Type Product object
 */
const parseWPProduct = (prod) => {
  // Resolve image
  let image = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80";
  if (prod._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
    image = prod._embedded["wp:featuredmedia"][0].source_url;
  }

  // Resolve multiple gallery images
  let gallery = [image];
  if (prod.acf?.gallery) {
    gallery = Array.isArray(prod.acf.gallery) ? prod.acf.gallery : [image];
  }

  return {
    id: prod.slug || String(prod.id),
    title: prod.title?.rendered || "",
    line: prod.acf?.line || (prod.title?.rendered ? prod.title.rendered.toUpperCase() : "PRODUCT"),
    category: prod.acf?.category || "parklets",
    image,
    gallery,
    badges: prod.acf?.badges || ["modular"],
    tagline: prod.acf?.tagline || "Visionary design for modern environments.",
    description: prod.content?.rendered || prod.acf?.description || "",
    features: prod.acf?.features || ["Modular design", "Corrosion resistant coating"],
    specifications: {
      materials: prod.acf?.specifications?.materials || "Galvanized powder-coated steel.",
      dimensions: prod.acf?.specifications?.dimensions || "Modular sizes custom built.",
      installation: prod.acf?.specifications?.installation || "Concealed chemical anchoring.",
      sustainability: prod.acf?.specifications?.sustainability || "100% recyclable steel structure."
    },
    options: {
      wood: prod.acf?.options?.wood || ["Jatoba FSC®", "Robinia"],
      metal: prod.acf?.options?.metal || ["Anthracite Grey", "Corten Brown"],
      modules: prod.acf?.options?.modules || ["Base Unit", "Side Planter"]
    },
    yoast_head_json: prod.yoast_head_json || null
  };
};

/**
 * Helper: Parses WooCommerce API Product object
 */
const parseWCObjectToProduct = (prod) => {
  const image = prod.images?.[0]?.src || "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80";
  const gallery = prod.images?.map((img) => img.src) || [image];
  
  return {
    id: prod.slug || String(prod.id),
    title: prod.name || "",
    line: prod.sku || (prod.name ? prod.name.toUpperCase() : "PRODUCT"),
    category: prod.categories?.[0]?.slug || "parklets",
    image,
    gallery,
    badges: ["new"],
    tagline: prod.short_description?.replace(/<[^>]*>/g, "") || "Premium street furniture.",
    description: prod.description || "",
    features: ["Heavy duty construction", "Sustainable materials"],
    specifications: {
      materials: "Galvanized steel and sustainably sourced wood.",
      dimensions: "Standard dimensions according to order parameters.",
      installation: "Surface mounted or sub-surface cast.",
      sustainability: "Recyclable hardware frame components."
    },
    options: {
      wood: ["Natural Oak", "Thermo Pine"],
      metal: ["Anthracite", "Silver"],
      modules: ["Main Seat Assembly"]
    },
    yoast_head_json: prod.yoast_head_json || null
  };
};
