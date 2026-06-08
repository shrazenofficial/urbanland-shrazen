<?php
/**
 * Plugin Name: Urbanland Product Sync
 * Description: Registers Product Custom Post Types, imports 114 products, and exposes standard ACF REST API endpoints.
 * Version: 1.0.0
 * Author: Urbanland Products
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// 1. Register Custom Post Type and Taxonomy
add_action( 'init', 'urbanland_register_post_types' );
function urbanland_register_post_types() {
    register_post_type( 'urbanland_product', array(
        'labels'      => array(
            'name'          => __( 'Products', 'urbanland' ),
            'singular_name' => __( 'Product', 'urbanland' ),
        ),
        'public'      => true,
        'has_archive' => true,
        'show_in_rest' => true, // Enables default REST API endpoint at /wp-json/wp/v2/urbanland_product
        'supports'    => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions' ),
        'taxonomies'  => array( 'urbanland_product_cat' ),
    ) );

    register_taxonomy( 'urbanland_product_cat', 'urbanland_product', array(
        'labels'            => array(
            'name'          => __( 'Product Categories', 'urbanland' ),
            'singular_name' => __( 'Product Category', 'urbanland' ),
        ),
        'hierarchical'      => true,
        'show_in_rest'      => true,
    ) );
}

// 2. Add ACF Metadata Fields to CPT REST API Response
// Our React frontend queries the posts REST API and expects metadata in product.acf.xxx fields
add_action( 'rest_api_init', 'urbanland_register_rest_fields' );
function urbanland_register_rest_fields() {
    register_rest_field( 'urbanland_product', 'acf', array(
        'get_callback' => 'urbanland_get_product_acf_meta',
        'schema'       => null,
    ) );
}

function urbanland_get_product_acf_meta( $object ) {
    $post_id = $object['id'];
    
    // Retrieve metadata matching React wp.js expectations
    return array(
        'line'           => get_post_meta( $post_id, '_urbanland_line', true ),
        'category'       => get_post_meta( $post_id, '_urbanland_category', true ),
        'gallery'        => get_post_meta( $post_id, '_urbanland_gallery', true ) ?: array(),
        'badges'         => get_post_meta( $post_id, '_urbanland_badges', true ) ?: array(),
        'tagline'        => get_post_meta( $post_id, '_urbanland_tagline', true ),
        'description'    => get_post_meta( $post_id, '_urbanland_description', true ),
        'features'       => get_post_meta( $post_id, '_urbanland_features', true ) ?: array(),
        'specifications' => get_post_meta( $post_id, '_urbanland_specifications', true ) ?: array(),
        'options'        => get_post_meta( $post_id, '_urbanland_options', true ) ?: array(),
    );
}

// 3. Create Admin Settings Dashboard
add_action( 'admin_menu', 'urbanland_add_sync_menu' );
function urbanland_add_sync_menu() {
    add_submenu_page(
        'tools.php',
        __( 'Urbanland Sync', 'urbanland' ),
        __( 'Urbanland Sync', 'urbanland' ),
        'manage_options',
        'urbanland-sync',
        'urbanland_sync_dashboard_html'
    );
}

function urbanland_sync_dashboard_html() {
    // Check user permissions
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }

    // Handle form submit triggers
    if ( isset( $_POST['run_urbanland_import'] ) ) {
        check_admin_referer( 'urbanland_import_nonce_action', 'urbanland_import_nonce' );
        $import_count = urbanland_execute_import();
        echo '<div class="notice notice-success is-dismissible"><p>' . sprintf( __( 'Successfully synchronized %d products!', 'urbanland' ), $import_count ) . '</p></div>';
    }

    ?>
    <div class="wrap" style="max-width: 800px; margin-top: 20px;">
        <h1 style="font-weight: 900; color: #142216; font-size: 2.2em; text-transform: uppercase; letter-spacing: -0.5px;">
            Urbanland <span style="color: #C9A84C;">Sync Studio</span>
        </h1>
        <p style="color: #666; font-size: 1.1em; margin-bottom: 25px;">
            Synchronize 114 product models and their category taxonomies from the React catalog directly into your WordPress database.
        </p>

        <div class="card" style="background: #ffffff; border-radius: 12px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; margin-bottom: 30px;">
            <h2 style="font-weight: 700; color: #1a202c; font-size: 1.4em; margin-top: 0;">One-Click Product Sync</h2>
            <p style="color: #4a5568; line-height: 1.6;">
                Clicking the button below will register the active category taxonomies, generate Custom Post Types, map structured specification metrics (features, options, materials), and push all 114 products into your local WordPress tables. If a product code already exists, the record will automatically update.
            </p>

            <form method="post" action="" style="margin-top: 25px;">
                <?php wp_nonce_field( 'urbanland_import_nonce_action', 'urbanland_import_nonce' ); ?>
                <input type="submit" name="run_urbanland_import" id="submit" class="button button-primary button-large" style="background: #2C5F2E; border-color: #2C5F2E; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; padding: 6px 20px 8px; border-radius: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" value="<?php _e( 'Sync 114 Products Now', 'urbanland' ); ?>">
            </form>
        </div>

        <div class="card" style="background: #ffffff; border-radius: 12px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
            <h2 style="font-weight: 700; color: #1a202c; font-size: 1.4em; margin-top: 0;">API Endpoint Configuration</h2>
            <p style="color: #4a5568; line-height: 1.6;">
                Once products are synchronized, your React frontend can query this WordPress database directly. Set your `.env` or build environment variable to:
            </p>
            <code style="display: block; background: #f7fafc; padding: 12px; border-radius: 6px; font-weight: bold; border: 1px solid #edf2f7; color: #2d3748; margin: 15px 0;">
                VITE_WP_API_URL="<?php echo site_url(); ?>"
            </code>
            <p style="color: #4a5568; line-height: 1.6; font-size: 0.9em;">
                The REST API endpoint will serve products from: <br>
                <a href="<?php echo site_url( '/wp-json/wp/v2/urbanland_product' ); ?>" target="_blank"><?php echo site_url( '/wp-json/wp/v2/urbanland_product' ); ?></a>
            </p>
        </div>
    </div>
    <?php
}

// 4. Ingestion Sync Action Engine
function urbanland_execute_import() {
    $products_json = <<<'JSON'
[
  {
    "id": "ulpb-01",
    "title": "ULBP-01",
    "line": "Integrated WPC seating & concrete planter boxes.",
    "category": "bench-planters",
    "url": "/product/ulpb-01",
    "image": "/assets/bench-planters.jpeg",
    "gallery": [
      "/assets/bench-planters.jpeg",
      "/assets/bench-planters-ugc.jpeg",
      "/assets/bench-planter-hero.jpeg"
    ],
    "badges": [
      "New",
      "Popular"
    ],
    "tagline": "Seamless integration of modern seating with living greenery.",
    "description": "Designed to combine architectural seating with built-in planter islands. Perfect for shopping mall corridors, municipal streetscapes, and university plazas where public space is premium.",
    "features": [
      "High-durability WPC seating slats with weather treatment",
      "Architectural concrete soil container structure",
      "Internal water drainage channels with soil barrier screens",
      "Modular linking configurations for custom public layouts"
    ],
    "specifications": {
      "materials": "FSC certified WPC wood slats; lightweight concrete container structure; stainless steel support framework.",
      "dimensions": "Standard module: 2200 mm length, 800 mm planter width, 450 mm bench seat height.",
      "installation": "Surface mounted directly on pavement or secured using concealed expansion concrete anchors.",
      "sustainability": "Optimizes urban green spaces; uses organic recycled timber fibers and low-impact concrete aggregates."
    },
    "options": {
      "wood": [
        "WPC teak finish slats",
        "Natural Jatoba timber finish",
        "Acacia slats"
      ],
      "metal": [
        "Smooth Sandstone Concrete",
        "Charcoal Grey Concrete",
        "White Granite Concrete finish"
      ],
      "modules": [
        "Linear Single Planter Set",
        "L-shaped Dual Planter Set",
        "Hexagonal Central Planter Set"
      ]
    }
  },
  {
    "id": "ulb-01",
    "title": "ULB-01",
    "line": "Premium weather-resistant public seating benches.",
    "category": "benches",
    "url": "/product/ulb-01",
    "image": "/assets/benches.jpeg",
    "gallery": [
      "/assets/benches.jpeg",
      "/assets/benches-ugc.jpeg",
      "/assets/bench-hero.jpeg"
    ],
    "badges": [
      "Best Seller"
    ],
    "tagline": "Ergonomic and highly durable outdoor seating systems.",
    "description": "Sleek outdoor benches featuring cast iron or structural steel frames cladded in organic timber or WPC slats. Engineered for extreme outdoor conditions, comfort, and longevity.",
    "features": [
      "Ergonomic back support angles for relaxed public resting",
      "Sustainably sourced timber or low-maintenance WPC slats",
      "Heavy-duty cast iron or laser-cut steel base supports",
      "Anti-skateboarding studs integrated by default for public safety"
    ],
    "specifications": {
      "materials": "Galvanized steel sides with high-yield strength; premium weather-resistant powder coatings; stainless steel hardware.",
      "dimensions": "Length: 1800 mm; Depth: 620 mm; Height: 810 mm; Seat height: 450 mm.",
      "installation": "Surface flanged anchoring with four high-strength chemical concrete bolts.",
      "sustainability": "Duplex anti-corrosion coating prevents rust; wood elements use FSC certified materials."
    },
    "options": {
      "wood": [
        "Robinia timber slats",
        "Jatoba FSC® organic timber",
        "HPL composite panels"
      ],
      "metal": [
        "Anthracite Grey (RAL 7016)",
        "Corten Texture paint finish",
        "Jet Black (RAL 9005)"
      ],
      "modules": [
        "Bench with backrest and armrests",
        "Flat Bench without backrest",
        "Double-sided park bench set"
      ]
    }
  },
  {
    "id": "ulbs-01",
    "title": "ULBS-01",
    "line": "Robust steel bus shelters for smart cities.",
    "category": "bus-shelters",
    "url": "/product/ulbs-01",
    "image": "/assets/bus-shelters.jpeg",
    "gallery": [
      "/assets/bus-shelters.jpeg",
      "/assets/bus-shelters-ugc.jpeg",
      "/assets/bus-shelters-real-ugc.jpeg"
    ],
    "badges": [
      "Popular"
    ],
    "tagline": "Modern transit stop canopies with premium structural finishes.",
    "description": "Hot-dip galvanized steel structures with safety glass panels, solar capabilities, and comfortable integrated seating. Engineered for high wind loads and public durability.",
    "features": [
      "Modular bay extensions to accommodate varying transit traffic",
      "8mm toughened safety glass wind guards with frit patterns",
      "Integrated solar roofing kit for off-grid lighting",
      "Concealed wiring conduit runs for clean visual lines"
    ],
    "specifications": {
      "materials": "Structural steel column chassis; Akzonobel powder coating; laminated glass; FSC seating slats.",
      "dimensions": "Standard 3-bay model: 4200 mm width, 1600 mm depth, 2500 mm clearance height.",
      "installation": "Sub-surface concrete foundation anchoring with high-tensile threaded rods.",
      "sustainability": "Integrated low-power LED systems powered by optional PV solar panels; fully recyclable glass and steel."
    },
    "options": {
      "wood": [
        "Robinia seat slats",
        "HPL seating panels",
        "FSC Jatoba slats"
      ],
      "metal": [
        "Silver Metallic (RAL 9006)",
        "Anthracite Grey (RAL 7016)",
        "Slate Blue (RAL 5008)"
      ],
      "modules": [
        "Standard 3-bay stop",
        "Extended 5-bay stop",
        "Digital E-paper screen integration kit"
      ]
    }
  },
  {
    "id": "ulc-01",
    "title": "ULC-01",
    "line": "Resort-style poolside daybed pavilions.",
    "category": "cabanas",
    "url": "/product/ulc-01",
    "image": "/assets/cabanas.jpeg",
    "gallery": [
      "/assets/cabanas.jpeg",
      "/assets/cabanas-ugc.jpeg",
      "/assets/gallery-hotels.png"
    ],
    "badges": [
      "New"
    ],
    "tagline": "Shaded luxury outdoor daybeds for premium resorts.",
    "description": "Features durable steel structure wrapped with outdoor cushions and curtains. Provides intimate, private relaxation spaces for luxury hospitality decks and rooftops.",
    "features": [
      "Heavy structural steel framework with weatherproofing",
      "UV-protected quick-dry foam cushions",
      "Side privacy drapes in Sunbrella® high-performance fabric",
      "Integrated side beverage shelving and device pockets"
    ],
    "specifications": {
      "materials": "Powder coated structural steel tubes; FSC timber decking; weather-resistant canvas fabric sheets.",
      "dimensions": "Footprint: 2000 mm x 2000 mm; Clearance Height: 2200 mm; Bed platform: 450 mm height.",
      "installation": "Free-standing layout with non-marking leveling feet, or deck-anchored flange brackets.",
      "sustainability": "Durable textile fibers and corrosion-resistant metal framework ensure a long service life."
    },
    "options": {
      "wood": [
        "Teak wood frame detailing",
        "Acacia slats",
        "Synthetic WPC frame accents"
      ],
      "metal": [
        "Warm Sand (RAL 1013)",
        "Corten Brown texture",
        "Charcoal Grey"
      ],
      "modules": [
        "Standard Single Daybed Set",
        "Double Daybed Set with central table",
        "Privacy shutter screen add-on"
      ]
    }
  },
  {
    "id": "ulct-01",
    "title": "ULCT-01",
    "line": "Heavy-duty campus & workplace dining sets.",
    "category": "canteen-tables",
    "url": "/product/ulct-01",
    "image": "/assets/canteen-tables.jpeg",
    "gallery": [
      "/assets/canteen-tables.jpeg",
      "/assets/canteen-tables-ugc.jpeg",
      "/assets/canteen-tables-hero.jpeg"
    ],
    "badges": [
      "Popular"
    ],
    "tagline": "Integrated table and bench configurations for high-traffic zones.",
    "description": "The Morse series provides extreme structural durability using galvanized powder-coated frames and low-maintenance HPL slats. Perfect for corporate cafes and school courtyards.",
    "features": [
      "Integrated table and bench design for permanent alignment",
      "Vandal-resistant assembly screws and fastening systems",
      "Low maintenance High-Pressure Laminate (HPL) panel tops",
      "Anti-pooling table surface drainage slots"
    ],
    "specifications": {
      "materials": "Laser-cut galvanized steel frame chassis; 12mm exterior grade HPL slats; stainless steel hardware.",
      "dimensions": "Overall footprint: 2200 mm width, 1800 mm depth, 750 mm table height, 450 mm seat height.",
      "installation": "Surface concrete expansion bolts, or optional free-standing heavy base plates.",
      "sustainability": "Recyclable metal framing; HPL consists of organic fibers and non-toxic resins."
    },
    "options": {
      "wood": [
        "Robinia timber slats",
        "Thermo-Pine slats",
        "Charcoal HPL panels"
      ],
      "metal": [
        "Corten Texture finish",
        "Slate Grey (RAL 7015)",
        "Anthracite Grey (RAL 7016)"
      ],
      "modules": [
        "Standard 6-seater dining set",
        "Extended 8-seater dining set",
        "Integrated parasol shade mount"
      ]
    }
  },
  {
    "id": "ulcs-01",
    "title": "ULCS-01",
    "line": "High-tensile modular car parking structures.",
    "category": "car-shelters",
    "url": "/product/ulcs-01",
    "image": "/assets/car-shelters.jpeg",
    "gallery": [
      "/assets/car-shelters.jpeg",
      "/assets/car-shelters-ugc.jpeg",
      "/assets/car-shelters-hero.jpeg"
    ],
    "badges": [
      "Featured"
    ],
    "tagline": "Cantilever structural steel shelters for premium vehicle coverage.",
    "description": "Engineered to shield vehicles from heavy sun, rain, and hail. Standard double-car bays feature PVDF-coated fabrics or metal decking, ready for solar and EV charger integration.",
    "features": [
      "Cantilever column support structure for unimpeded parking entry",
      "High-tensile structural steel framework for severe weather loads",
      "Concealed downspouts inside structural columns",
      "Optimized roof pitch to allow direct solar PV retrofitting"
    ],
    "specifications": {
      "materials": "Heavy structural H-beams; duplex polyurethane paint finish; PVDF tensioned fabric membrane.",
      "dimensions": "Double bay standard: 5500 mm width, 5000 mm depth, 2700 mm clearance height.",
      "installation": "Deep anchor cage embedded in reinforced concrete footing blocks.",
      "sustainability": "Designed to host overhead clean energy generation and EV charging points."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Robinia wrap detailing on columns"
      ],
      "metal": [
        "Anthracite Grey (RAL 7016)",
        "Slate Grey (RAL 7015)",
        "Galvanized Industrial finish"
      ],
      "modules": [
        "Double Car Cantilever bay",
        "Quad Car Bay module",
        "EV Charger mounting plate bundle"
      ]
    }
  },
  {
    "id": "uldb-01",
    "title": "ULDB-01",
    "line": "Segregated municipal waste sorting bins.",
    "category": "dustbins",
    "url": "/product/uldb-01",
    "image": "/assets/dustbins.jpeg",
    "gallery": [
      "/assets/dustbins.jpeg",
      "/assets/dustbins-ugc.jpeg",
      "/assets/dustbins-hero.jpeg"
    ],
    "badges": [
      "Popular"
    ],
    "tagline": "Robust waste segregation containers for public spaces.",
    "description": "Dual-compartment airport dustbin for cans and litter designed by Urbanlandproducts, a trusted Airport Dustbin Manufacturer in India.",
    "features": [
      "Dual and triple waste segregation sorting channels",
      "Easy-pull inner galvanized liners with ergonomic handles",
      "Heavy-duty cylinder locks to prevent unauthorized opening",
      "Anti-rain hood lids with optional integrated ashtrays"
    ],
    "specifications": {
      "materials": "Textured powder-coated sheet steel casing; Grade 304 stainless steel lid; galvanized metal inner buckets.",
      "dimensions": "Triple sorting module: 1500 mm width, 500 mm depth, 950 mm height. Capacity: 225L.",
      "installation": "Flange plates bolted from the inside of the casing onto concrete pathways.",
      "sustainability": "Encourages segregated garbage collection; uses highly durable and recyclable metals."
    },
    "options": {
      "wood": [
        "No timber cladding",
        "Robinia wood front cladding",
        "Jatoba FSC® front cladding"
      ],
      "metal": [
        "Corten Texture finish",
        "Forest Green (RAL 6009)",
        "Anthracite Grey (RAL 7016)"
      ],
      "modules": [
        "Single Litter Bin (75L)",
        "Double Sorting Bin (150L)",
        "Triple Recycling Station (225L)"
      ]
    }
  },
  {
    "id": "ulg-01",
    "title": "ULG-01",
    "line": "Elegant timber garden structures.",
    "category": "gazebos",
    "url": "/product/ulg-01",
    "image": "/assets/gazebos.jpeg",
    "gallery": [
      "/assets/gazebos.jpeg",
      "/assets/gazebos-ugc.jpeg",
      "/assets/wicker-furniture-hero.jpeg"
    ],
    "badges": [
      "New"
    ],
    "tagline": "Pre-engineered wooden pavilions for luxury gardens.",
    "description": "FSC certified hardwood framing combined with premium metal joints. Perfect for residential farmhouses, resort lawns, and outdoor dining patios.",
    "features": [
      "Pressure-treated premium timber posts against moisture and insects",
      "Heavy-gauge powder coated connector joints for easy alignment",
      "Routed column tracks for hidden outdoor wiring feeds",
      "Modular side shutter panels for privacy control"
    ],
    "specifications": {
      "materials": "FSC tropical Robinia or Teak framing columns; architectural steel joints; stainless steel screws.",
      "dimensions": "Standard pavilion size: 3600 mm x 3600 mm x 2700 mm height. Fully customizable dimensions.",
      "installation": "Surface bracket flanges secured to concrete deck slabs or patios.",
      "sustainability": "Utilizes renewable and responsibly harvested forest timbers."
    },
    "options": {
      "wood": [
        "Robinia framework",
        "FSC Teak framework",
        "Premium Acacia structure"
      ],
      "metal": [
        "Jet Black powder joints",
        "Bronze Metallic joints",
        "Corten Texture joints"
      ],
      "modules": [
        "Standard open structure",
        "Structure with louvered privacy walls",
        "LED uplighting bundle kit"
      ]
    }
  },
  {
    "id": "ulpg-01",
    "title": "ULPG-01",
    "line": "Modern shading structures.",
    "category": "pergolas",
    "url": "/product/ulpg-01",
    "image": "/assets/pergolas.jpeg",
    "gallery": [
      "/assets/pergolas.jpeg",
      "/assets/pergolas-ugc.jpeg",
      "/assets/bench-planter-hero.jpeg"
    ],
    "badges": [
      "New"
    ],
    "tagline": "High-tension structural shade pergolas.",
    "description": "Sculptural tensioned sail and louvered structures designed to create visually striking shaded pathways and plazas. UV-stable polymer sail material.",
    "features": [
      "High-tension microporous sail cloth blocking 95% UV rays",
      "Structural steel columns with hidden cable tension bolts",
      "Optimized water shedding curves to prevent pooling",
      "Minimalist columns to ensure maximum clear space underneath"
    ],
    "specifications": {
      "materials": "HDPE polymer shade cloth; structural galvanized steel posts; stainless steel tensioning rigs.",
      "dimensions": "Typical layout span: 5000 mm x 5000 mm. Heights tailored to site specifications.",
      "installation": "Heavy concrete footing anchors to secure high-tension loads.",
      "sustainability": "High-grade polymer sails with 10+ year lifespan reduce frequent replacements."
    },
    "options": {
      "wood": [
        "No timber accents",
        "WPC details on columns"
      ],
      "metal": [
        "Anthracite Grey columns",
        "Corten Texture paint",
        "Warm Bronze finish"
      ],
      "modules": [
        "Single sail configuration",
        "Overlapping dual-sail system",
        "LED mast lighting integration"
      ]
    }
  },
  {
    "id": "ulp-01",
    "title": "ULP-01",
    "line": "Lightweight architectural concrete planters.",
    "category": "planters",
    "url": "/product/ulp-01",
    "image": "/assets/planters.jpeg",
    "gallery": [
      "/assets/planters.jpeg",
      "/assets/planters-ugc.jpeg",
      "/assets/planters-box-hero.jpeg"
    ],
    "badges": [
      "Popular"
    ],
    "tagline": "Architectural concrete planting pots for public spaces.",
    "description": "Double-walled insulated concrete container systems designed to nurture large trees and shrubs in urban environments. Easy relocation slots.",
    "features": [
      "Lightweight concrete composition offering extreme durability at reduced weight",
      "Double-walled interior cavity to protect roots from extreme temperatures",
      "Built-in overflow drainage pipes with filtering screens",
      "Integrated sub-base forklift pockets for easy relocation"
    ],
    "specifications": {
      "materials": "Architectural Concrete mix; waterproof inner sealant layer; internal foam insulation core.",
      "dimensions": "Rectangular planter: 1500 mm length, 750 mm width, 800 mm height. Standard cube: 1000 mm x 1000 mm x 800 mm.",
      "installation": "Placed directly on floor or patio; leveling pads compensate for slopes.",
      "sustainability": "Insulated walls minimize water usage; uses natural sand and local cement aggregates."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Top-edge timber trim slats"
      ],
      "metal": [
        "Smooth Sandstone finish",
        "Textured Granite finish",
        "Corten steel effect"
      ],
      "modules": [
        "Standard Rectangular box",
        "Square planter cube",
        "Planter box with clip-on WPC bench seat"
      ]
    }
  },
  {
    "id": "ulpl-01",
    "title": "ULPL-01",
    "line": "Premium loungers & deck daybeds.",
    "category": "poolside-loungers",
    "url": "/product/ulpl-01",
    "image": "/assets/poolside-loungers.jpeg",
    "gallery": [
      "/assets/poolside-loungers.jpeg",
      "/assets/poolside-loungers-ugc.jpeg",
      "/assets/welcome-2.png"
    ],
    "badges": [
      "Best Seller"
    ],
    "tagline": "Resort-grade synthetic wicker sun loungers.",
    "description": "Rust-free aluminum frames wrapped in hand-woven HDPE weather-proof wicker. Quick-dry foam cushions ensure premium comfort by the pool.",
    "features": [
      "Handcrafted weave patterns using heavy-duty weather-proof fibers",
      "Lightweight, rust-free powder coated aluminum frame structure",
      "Quick-dry foam padding resistant to mold and mildew",
      "Multi-position reclining backrest mechanism"
    ],
    "specifications": {
      "materials": "Aluminum tube framing; HDPE synthetic wicker strands; quick-dry foam; Sunbrella® fabrics.",
      "dimensions": "Single lounger: 2000 mm length, 700 mm width, 350 mm platform height.",
      "installation": "Free-standing layout with non-marking adjustable floor levelers.",
      "sustainability": "HDPE wicker strands are 100% recyclable; cushions use CFC-free foam components."
    },
    "options": {
      "wood": [
        "No wood trim",
        "Teak leg accents"
      ],
      "metal": [
        "Natural Tan wicker",
        "Charcoal Grey wicker",
        "Warm Off-White wicker"
      ],
      "modules": [
        "Single Poolside Lounger",
        "Lounger Pair with matching side table",
        "Double Poolside Lounger Bed"
      ]
    }
  },
  {
    "id": "ulpf-01",
    "title": "ULPF-01",
    "line": "Modular off-grid residential structures.",
    "category": "pre-fab-homes",
    "url": "/product/ulpf-01",
    "image": "/assets/pre-fab-homes.jpeg",
    "gallery": [
      "/assets/pre-fab-homes.jpeg",
      "/assets/pre-fab-homes-ugc.jpeg",
      "/assets/welcome-1.png"
    ],
    "badges": [
      "New"
    ],
    "tagline": "Eco-friendly premium pre-fabricated modular rooms.",
    "description": "Thermally insulated structural steel chassis cladded in WPC composites. Installs in under 48 hours for resort cottages, home offices, and eco-sensitive zones.",
    "features": [
      "Complete assembly on site in under 48 hours",
      "Double-walled thermal insulation boards for energy savings",
      "Helical ground pile footing interface for minimal foundation impact",
      "Pre-routed channels for electrical grids, plumbing, and solar PV"
    ],
    "specifications": {
      "materials": "Galvanized structural steel chassis; WPC composite external panels; polyurethane insulation cores.",
      "dimensions": "Base layout module: 25 square meters; clearance interior height: 2800 mm.",
      "installation": "Assembled directly over ground pile anchors or concrete pads.",
      "sustainability": "High insulation properties minimize AC loads; 90% recyclable components."
    },
    "options": {
      "wood": [
        "WPC organic look cladding",
        "Robinia timber cladding panels"
      ],
      "metal": [
        "Charcoal Grey panels",
        "Warm Bronze cladding accents"
      ],
      "modules": [
        "Base living cabin",
        "Cabin with front patio deck",
        "Cabin with rooftop solar PV array"
      ]
    }
  },
  {
    "id": "ulwd-01",
    "title": "ULWD-01",
    "line": "Hand-woven wicker dining tables & chairs.",
    "category": "wicker-dining-sets",
    "url": "/product/ulwd-01",
    "image": "/assets/wicker-dining.jpeg",
    "gallery": [
      "/assets/wicker-dining.jpeg",
      "/assets/wicker-dining-ugc.jpeg",
      "/assets/gallery-hotels.png"
    ],
    "badges": [
      "New",
      "Popular"
    ],
    "tagline": "Luxury dining sets engineered for outdoor durability.",
    "description": "Premium outdoor dining configurations made of hand-woven synthetic wicker strands. Resistant to chlorine, water, and sun, with Sunbrella® fabrics.",
    "features": [
      "HDPE weather-proof synthetic wicker weave",
      "Rust-free internal structural aluminum support frame",
      "Tempered safety glass dining tabletop with non-slip mounts",
      "Water-repellent cushions cladded in UV-resistant Sunbrella® fabrics"
    ],
    "specifications": {
      "materials": "Extruded aluminum framing; HDPE wicker strands; tempered safety glass top; outdoor performance fabrics.",
      "dimensions": "6-seater table: 1800 mm length, 900 mm width, 750 mm height. Armchair: 600 mm x 600 mm x 850 mm.",
      "installation": "Free-standing dining configurations; adjustable leg glides protect pavers.",
      "sustainability": "Durable HDPE wicker offers 10+ years UV protection; frame uses recycled aluminum elements."
    },
    "options": {
      "wood": [
        "Tempered Glass table top",
        "Natural Teak wood table top"
      ],
      "metal": [
        "Natural Tan wicker",
        "Warm Charcoal wicker",
        "Polar White wicker"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulwl-01",
    "title": "ULWL-01",
    "line": "Luxury wicker sofas & lounge configurations.",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-01",
    "image": "/assets/wicker-living.jpeg",
    "gallery": [
      "/assets/wicker-living.jpeg",
      "/assets/wicker-living-ugc.jpeg",
      "/assets/welcome-1.png"
    ],
    "badges": [
      "Popular"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Beautifully crafted wicker modular sofas and armchairs. High-density foam cushions covered with weather-proof, water-repellent performance upholstery.",
    "features": [
      "High-density polyethylene synthetic wicker strands with UV blockers",
      "Stately ergonomic curved backs and deep seating comfort",
      "Modular components to set up customizable deck layouts",
      "Cushions with quick-dry core foam technology"
    ],
    "specifications": {
      "materials": "HDPE synthetic wicker weave; aluminum structural frames; quick-dry foam cushions; Sunbrella® acrylic fabric.",
      "dimensions": "Modular Sofa section: 900 mm width, 900 mm depth, 780 mm height. Coffee table: 900 mm diameter, 400 mm height.",
      "installation": "Free-standing layout; modular connector clips secure seating blocks together.",
      "sustainability": "Highly resistant to rot, mold, and weathering, minimizing carbon footprint over time."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet accents on sofa framework"
      ],
      "metal": [
        "Natural Tan wicker",
        "Charcoal Grey wicker",
        "Warm Off-White wicker"
      ],
      "modules": [
        "3-seater sofa",
        "L-shaped modular corner sofa set",
        "Swivel lounge armchair"
      ]
    }
  },
  {
    "id": "ulb-34",
    "title": "ULB-34",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-34",
    "image": "/products/all_white/1-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-34 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-35",
    "title": "ULB-35",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-35",
    "image": "/products/all_white/1-10.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-10.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-35 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-36",
    "title": "ULB-36",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-36",
    "image": "/products/all_white/1-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-36 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-37",
    "title": "ULB-37",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-37",
    "image": "/products/all_white/1-3.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-3.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-37 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-38",
    "title": "ULB-38",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-38",
    "image": "/products/all_white/1-6.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-6.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-38 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-39",
    "title": "ULB-39",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-39",
    "image": "/products/all_white/1-7.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-7.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-39 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-40",
    "title": "ULB-40",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-40",
    "image": "/products/all_white/1-8.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-8.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-40 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-41",
    "title": "ULB-41",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-41",
    "image": "/products/all_white/1-9.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/1-9.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-41 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulwl-02",
    "title": "ULWL-02",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-02",
    "image": "/products/all_white/2-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/2-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-02 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-03",
    "title": "ULWL-03",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-03",
    "image": "/products/all_white/2-3.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/2-3.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-03 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-04",
    "title": "ULWL-04",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-04",
    "image": "/products/all_white/2-5.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/2-5.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-04 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-05",
    "title": "ULWL-05",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-05",
    "image": "/products/all_white/2-6.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/2-6.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-05 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-06",
    "title": "ULWL-06",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-06",
    "image": "/products/all_white/2-7.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/2-7.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-06 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-07",
    "title": "ULWL-07",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-07",
    "image": "/products/all_white/2-8.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/2-8.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-07 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-08",
    "title": "ULWL-08",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-08",
    "image": "/products/all_white/2-9.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/2-9.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-08 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwd-02",
    "title": "ULWD-02",
    "line": "Luxury Outdoor Wicker Dining",
    "category": "wicker-dining-sets",
    "url": "/product/ulwd-02",
    "image": "/products/all_white/3-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/3-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Hand-woven wicker dining configurations for elegant decks.",
    "description": "Model ULWD-02 — Premium all-white outdoor dining table and chairs set. Handcrafted using high-density synthetic wicker strands and robust aluminum frames. Tabletop features high-strength tempered safety glass for absolute cleanliness.",
    "features": [
      "Hand-woven weather-proof HDPE synthetic wicker",
      "Tempered safety glass tabletop with non-slip pads",
      "Rust-free internal structural aluminum support",
      "Water-repellent performance seat cushions"
    ],
    "specifications": {
      "materials": "Extruded aluminum frames; HDPE wicker fibers; tempered safety glass top; outdoor canvas upholstery.",
      "dimensions": "Standard 6-seater dining table: 1800 mm length, 900 mm width, 750 mm height.",
      "installation": "Free-standing dining set with adjustable paving levelers.",
      "sustainability": "Recycled aluminum content; high-durability fibers with 10+ years lifespan."
    },
    "options": {
      "wood": [
        "Tempered Glass top",
        "Satin White glass top"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulwd-03",
    "title": "ULWD-03",
    "line": "Luxury Outdoor Wicker Dining",
    "category": "wicker-dining-sets",
    "url": "/product/ulwd-03",
    "image": "/products/all_white/3-4.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/3-4.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Hand-woven wicker dining configurations for elegant decks.",
    "description": "Model ULWD-03 — Premium all-white outdoor dining table and chairs set. Handcrafted using high-density synthetic wicker strands and robust aluminum frames. Tabletop features high-strength tempered safety glass for absolute cleanliness.",
    "features": [
      "Hand-woven weather-proof HDPE synthetic wicker",
      "Tempered safety glass tabletop with non-slip pads",
      "Rust-free internal structural aluminum support",
      "Water-repellent performance seat cushions"
    ],
    "specifications": {
      "materials": "Extruded aluminum frames; HDPE wicker fibers; tempered safety glass top; outdoor canvas upholstery.",
      "dimensions": "Standard 6-seater dining table: 1800 mm length, 900 mm width, 750 mm height.",
      "installation": "Free-standing dining set with adjustable paving levelers.",
      "sustainability": "Recycled aluminum content; high-durability fibers with 10+ years lifespan."
    },
    "options": {
      "wood": [
        "Tempered Glass top",
        "Satin White glass top"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulwd-04",
    "title": "ULWD-04",
    "line": "Luxury Outdoor Wicker Dining",
    "category": "wicker-dining-sets",
    "url": "/product/ulwd-04",
    "image": "/products/all_white/3-5.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/3-5.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Hand-woven wicker dining configurations for elegant decks.",
    "description": "Model ULWD-04 — Premium all-white outdoor dining table and chairs set. Handcrafted using high-density synthetic wicker strands and robust aluminum frames. Tabletop features high-strength tempered safety glass for absolute cleanliness.",
    "features": [
      "Hand-woven weather-proof HDPE synthetic wicker",
      "Tempered safety glass tabletop with non-slip pads",
      "Rust-free internal structural aluminum support",
      "Water-repellent performance seat cushions"
    ],
    "specifications": {
      "materials": "Extruded aluminum frames; HDPE wicker fibers; tempered safety glass top; outdoor canvas upholstery.",
      "dimensions": "Standard 6-seater dining table: 1800 mm length, 900 mm width, 750 mm height.",
      "installation": "Free-standing dining set with adjustable paving levelers.",
      "sustainability": "Recycled aluminum content; high-durability fibers with 10+ years lifespan."
    },
    "options": {
      "wood": [
        "Tempered Glass top",
        "Satin White glass top"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulwd-05",
    "title": "ULWD-05",
    "line": "Luxury Outdoor Wicker Dining",
    "category": "wicker-dining-sets",
    "url": "/product/ulwd-05",
    "image": "/products/all_white/3-6.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/3-6.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Hand-woven wicker dining configurations for elegant decks.",
    "description": "Model ULWD-05 — Premium all-white outdoor dining table and chairs set. Handcrafted using high-density synthetic wicker strands and robust aluminum frames. Tabletop features high-strength tempered safety glass for absolute cleanliness.",
    "features": [
      "Hand-woven weather-proof HDPE synthetic wicker",
      "Tempered safety glass tabletop with non-slip pads",
      "Rust-free internal structural aluminum support",
      "Water-repellent performance seat cushions"
    ],
    "specifications": {
      "materials": "Extruded aluminum frames; HDPE wicker fibers; tempered safety glass top; outdoor canvas upholstery.",
      "dimensions": "Standard 6-seater dining table: 1800 mm length, 900 mm width, 750 mm height.",
      "installation": "Free-standing dining set with adjustable paving levelers.",
      "sustainability": "Recycled aluminum content; high-durability fibers with 10+ years lifespan."
    },
    "options": {
      "wood": [
        "Tempered Glass top",
        "Satin White glass top"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulwd-06",
    "title": "ULWD-06",
    "line": "Luxury Outdoor Wicker Dining",
    "category": "wicker-dining-sets",
    "url": "/product/ulwd-06",
    "image": "/products/all_white/3-7.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/3-7.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Hand-woven wicker dining configurations for elegant decks.",
    "description": "Model ULWD-06 — Premium all-white outdoor dining table and chairs set. Handcrafted using high-density synthetic wicker strands and robust aluminum frames. Tabletop features high-strength tempered safety glass for absolute cleanliness.",
    "features": [
      "Hand-woven weather-proof HDPE synthetic wicker",
      "Tempered safety glass tabletop with non-slip pads",
      "Rust-free internal structural aluminum support",
      "Water-repellent performance seat cushions"
    ],
    "specifications": {
      "materials": "Extruded aluminum frames; HDPE wicker fibers; tempered safety glass top; outdoor canvas upholstery.",
      "dimensions": "Standard 6-seater dining table: 1800 mm length, 900 mm width, 750 mm height.",
      "installation": "Free-standing dining set with adjustable paving levelers.",
      "sustainability": "Recycled aluminum content; high-durability fibers with 10+ years lifespan."
    },
    "options": {
      "wood": [
        "Tempered Glass top",
        "Satin White glass top"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulwd-07",
    "title": "ULWD-07",
    "line": "Luxury Outdoor Wicker Dining",
    "category": "wicker-dining-sets",
    "url": "/product/ulwd-07",
    "image": "/products/all_white/3-8.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/3-8.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Hand-woven wicker dining configurations for elegant decks.",
    "description": "Model ULWD-07 — Premium all-white outdoor dining table and chairs set. Handcrafted using high-density synthetic wicker strands and robust aluminum frames. Tabletop features high-strength tempered safety glass for absolute cleanliness.",
    "features": [
      "Hand-woven weather-proof HDPE synthetic wicker",
      "Tempered safety glass tabletop with non-slip pads",
      "Rust-free internal structural aluminum support",
      "Water-repellent performance seat cushions"
    ],
    "specifications": {
      "materials": "Extruded aluminum frames; HDPE wicker fibers; tempered safety glass top; outdoor canvas upholstery.",
      "dimensions": "Standard 6-seater dining table: 1800 mm length, 900 mm width, 750 mm height.",
      "installation": "Free-standing dining set with adjustable paving levelers.",
      "sustainability": "Recycled aluminum content; high-durability fibers with 10+ years lifespan."
    },
    "options": {
      "wood": [
        "Tempered Glass top",
        "Satin White glass top"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulb-42",
    "title": "ULB-42",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-42",
    "image": "/products/all_white/4-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/4-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-42 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-43",
    "title": "ULB-43",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-43",
    "image": "/products/all_white/4-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/4-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-43 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-44",
    "title": "ULB-44",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-44",
    "image": "/products/all_white/4-4.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/4-4.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-44 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-45",
    "title": "ULB-45",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-45",
    "image": "/products/all_white/4-5.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/4-5.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-45 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-46",
    "title": "ULB-46",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-46",
    "image": "/products/all_white/4-6.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/4-6.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-46 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-47",
    "title": "ULB-47",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-47",
    "image": "/products/all_white/4-7.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/4-7.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-47 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-48",
    "title": "ULB-48",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-48",
    "image": "/products/all_white/5-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/5-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-48 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-49",
    "title": "ULB-49",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-49",
    "image": "/products/all_white/5-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/5-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-49 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-50",
    "title": "ULB-50",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-50",
    "image": "/products/all_white/5-4.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/5-4.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-50 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-51",
    "title": "ULB-51",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-51",
    "image": "/products/all_white/5-5.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/5-5.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-51 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-52",
    "title": "ULB-52",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-52",
    "image": "/products/all_white/5-6.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/5-6.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-52 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulwl-09",
    "title": "ULWL-09",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-09",
    "image": "/products/all_white/6-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/6-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-09 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-10",
    "title": "ULWL-10",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-10",
    "image": "/products/all_white/6-5.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/6-5.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-10 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulwl-11",
    "title": "ULWL-11",
    "line": "Luxury Hand-Woven Wicker Living",
    "category": "wicker-living-sets",
    "url": "/product/ulwl-11",
    "image": "/products/all_white/6-6.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/6-6.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Cinematic outdoor wicker seating & lounge configurations.",
    "description": "Model ULWL-11 — Beautifully crafted all-white synthetic wicker sofa set. Features hand-woven HDPE weather-proof wicker fibers wrapped around a rust-free structural aluminum frame. Upholstered in quick-dry foam and Sunbrella performance canvas.",
    "features": [
      "Hand-woven HDPE weather-resistant wicker fibers",
      "Rust-proof internal aluminum support frame",
      "Quick-dry core foam technology",
      "UV-stabilized and colorfast styling"
    ],
    "specifications": {
      "materials": "High-density polyethylene (HDPE) synthetic wicker; powder-coated structural aluminum frame; outdoor performance canvas.",
      "dimensions": "Standard sectional unit: 900 mm width, 900 mm depth, 750 mm back height.",
      "installation": "Free-standing modular layout with interlocking alignment clips.",
      "sustainability": "CFC-free quick-dry foam; 100% recyclable synthetic wicker fibers and aluminum."
    },
    "options": {
      "wood": [
        "No timber trim",
        "Teak feet detailing"
      ],
      "metal": [
        "All-white wicker weave",
        "Eggshell textured weave"
      ],
      "modules": [
        "Single armless sectional",
        "Corner lounge set",
        "Swivel lounge chair"
      ]
    }
  },
  {
    "id": "ulpl-02",
    "title": "ULPL-02",
    "line": "Premium Poolside Lounger",
    "category": "poolside-loungers",
    "url": "/product/ulpl-02",
    "image": "/products/all_white/7-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/7-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Resort-grade sunbeds engineered for luxury decks.",
    "description": "Model ULPL-02 — Rust-free all-white sun lounger bed. Wrapped in beautiful hand-woven HDPE wicker or high-tensile mesh fabric. Features multi-position backrest adjustment and quick-dry cushions for premium comfort.",
    "features": [
      "Rustless aluminum support structure",
      "HDPE synthetic wicker or high-tensile mesh wrap",
      "Multi-position reclining backrest mechanism",
      "Water-repellent quick-dry foam cushion"
    ],
    "specifications": {
      "materials": "Powder-coated aluminum frame; HDPE wicker; quick-dry reticulated foam; Sunbrella fabric.",
      "dimensions": "Standard lounger: 2000 mm length, 700 mm width, 350 mm platform height.",
      "installation": "Free-standing with non-marking leveler feet.",
      "sustainability": "100% recyclable frame and wicker; non-toxic CFC-free materials."
    },
    "options": {
      "wood": [
        "No wood details",
        "Teak leg accents"
      ],
      "metal": [
        "Polar White finish",
        "Eggshell White finish"
      ],
      "modules": [
        "Single Poolside Lounger",
        "Pair of Loungers with side table"
      ]
    }
  },
  {
    "id": "ulpl-03",
    "title": "ULPL-03",
    "line": "Premium Poolside Lounger",
    "category": "poolside-loungers",
    "url": "/product/ulpl-03",
    "image": "/products/all_white/7-3.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/7-3.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Resort-grade sunbeds engineered for luxury decks.",
    "description": "Model ULPL-03 — Rust-free all-white sun lounger bed. Wrapped in beautiful hand-woven HDPE wicker or high-tensile mesh fabric. Features multi-position backrest adjustment and quick-dry cushions for premium comfort.",
    "features": [
      "Rustless aluminum support structure",
      "HDPE synthetic wicker or high-tensile mesh wrap",
      "Multi-position reclining backrest mechanism",
      "Water-repellent quick-dry foam cushion"
    ],
    "specifications": {
      "materials": "Powder-coated aluminum frame; HDPE wicker; quick-dry reticulated foam; Sunbrella fabric.",
      "dimensions": "Standard lounger: 2000 mm length, 700 mm width, 350 mm platform height.",
      "installation": "Free-standing with non-marking leveler feet.",
      "sustainability": "100% recyclable frame and wicker; non-toxic CFC-free materials."
    },
    "options": {
      "wood": [
        "No wood details",
        "Teak leg accents"
      ],
      "metal": [
        "Polar White finish",
        "Eggshell White finish"
      ],
      "modules": [
        "Single Poolside Lounger",
        "Pair of Loungers with side table"
      ]
    }
  },
  {
    "id": "ulpl-04",
    "title": "ULPL-04",
    "line": "Premium Poolside Lounger",
    "category": "poolside-loungers",
    "url": "/product/ulpl-04",
    "image": "/products/all_white/7-4.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/7-4.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Resort-grade sunbeds engineered for luxury decks.",
    "description": "Model ULPL-04 — Rust-free all-white sun lounger bed. Wrapped in beautiful hand-woven HDPE wicker or high-tensile mesh fabric. Features multi-position backrest adjustment and quick-dry cushions for premium comfort.",
    "features": [
      "Rustless aluminum support structure",
      "HDPE synthetic wicker or high-tensile mesh wrap",
      "Multi-position reclining backrest mechanism",
      "Water-repellent quick-dry foam cushion"
    ],
    "specifications": {
      "materials": "Powder-coated aluminum frame; HDPE wicker; quick-dry reticulated foam; Sunbrella fabric.",
      "dimensions": "Standard lounger: 2000 mm length, 700 mm width, 350 mm platform height.",
      "installation": "Free-standing with non-marking leveler feet.",
      "sustainability": "100% recyclable frame and wicker; non-toxic CFC-free materials."
    },
    "options": {
      "wood": [
        "No wood details",
        "Teak leg accents"
      ],
      "metal": [
        "Polar White finish",
        "Eggshell White finish"
      ],
      "modules": [
        "Single Poolside Lounger",
        "Pair of Loungers with side table"
      ]
    }
  },
  {
    "id": "ulpl-05",
    "title": "ULPL-05",
    "line": "Premium Poolside Lounger",
    "category": "poolside-loungers",
    "url": "/product/ulpl-05",
    "image": "/products/all_white/7-5.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/7-5.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Resort-grade sunbeds engineered for luxury decks.",
    "description": "Model ULPL-05 — Rust-free all-white sun lounger bed. Wrapped in beautiful hand-woven HDPE wicker or high-tensile mesh fabric. Features multi-position backrest adjustment and quick-dry cushions for premium comfort.",
    "features": [
      "Rustless aluminum support structure",
      "HDPE synthetic wicker or high-tensile mesh wrap",
      "Multi-position reclining backrest mechanism",
      "Water-repellent quick-dry foam cushion"
    ],
    "specifications": {
      "materials": "Powder-coated aluminum frame; HDPE wicker; quick-dry reticulated foam; Sunbrella fabric.",
      "dimensions": "Standard lounger: 2000 mm length, 700 mm width, 350 mm platform height.",
      "installation": "Free-standing with non-marking leveler feet.",
      "sustainability": "100% recyclable frame and wicker; non-toxic CFC-free materials."
    },
    "options": {
      "wood": [
        "No wood details",
        "Teak leg accents"
      ],
      "metal": [
        "Polar White finish",
        "Eggshell White finish"
      ],
      "modules": [
        "Single Poolside Lounger",
        "Pair of Loungers with side table"
      ]
    }
  },
  {
    "id": "ulpl-06",
    "title": "ULPL-06",
    "line": "Premium Poolside Lounger",
    "category": "poolside-loungers",
    "url": "/product/ulpl-06",
    "image": "/products/all_white/7.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/7.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Resort-grade sunbeds engineered for luxury decks.",
    "description": "Model ULPL-06 — Rust-free all-white sun lounger bed. Wrapped in beautiful hand-woven HDPE wicker or high-tensile mesh fabric. Features multi-position backrest adjustment and quick-dry cushions for premium comfort.",
    "features": [
      "Rustless aluminum support structure",
      "HDPE synthetic wicker or high-tensile mesh wrap",
      "Multi-position reclining backrest mechanism",
      "Water-repellent quick-dry foam cushion"
    ],
    "specifications": {
      "materials": "Powder-coated aluminum frame; HDPE wicker; quick-dry reticulated foam; Sunbrella fabric.",
      "dimensions": "Standard lounger: 2000 mm length, 700 mm width, 350 mm platform height.",
      "installation": "Free-standing with non-marking leveler feet.",
      "sustainability": "100% recyclable frame and wicker; non-toxic CFC-free materials."
    },
    "options": {
      "wood": [
        "No wood details",
        "Teak leg accents"
      ],
      "metal": [
        "Polar White finish",
        "Eggshell White finish"
      ],
      "modules": [
        "Single Poolside Lounger",
        "Pair of Loungers with side table"
      ]
    }
  },
  {
    "id": "ulc-02",
    "title": "ULC-02",
    "line": "Luxury Poolside Cabana",
    "category": "cabanas",
    "url": "/product/ulc-02",
    "image": "/products/all_white/8-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/8-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Shaded daybed pavilions for high-end resorts.",
    "description": "Model ULC-02 — Resort-style luxury outdoor cabana. Features structural steel or aluminium framing cladded in weather-proof curtains and daybed cushions. Creates an intimate, shaded retreat for hotels and residential pools.",
    "features": [
      "Heavy structural frame with marine-grade coating",
      "UV-protected quick-dry daybed mattress",
      "Privacy curtains in Sunbrella canvas",
      "Integrated side shelves and beverage pockets"
    ],
    "specifications": {
      "materials": "Structural steel or anodized aluminum framework; Sunbrella performance fabrics; quick-dry foam.",
      "dimensions": "Standard footprint: 2000 mm x 2000 mm x 2200 mm clearance height.",
      "installation": "Free-standing with leveling feet or anchored to deck brackets.",
      "sustainability": "High-integrity structures with extended service life; recyclable materials."
    },
    "options": {
      "wood": [
        "White composite details",
        "Teak accents"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Standard daybed pavilion",
        "Double pavilion with privacy divider"
      ]
    }
  },
  {
    "id": "ulc-03",
    "title": "ULC-03",
    "line": "Luxury Poolside Cabana",
    "category": "cabanas",
    "url": "/product/ulc-03",
    "image": "/products/all_white/8-3.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/8-3.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Shaded daybed pavilions for high-end resorts.",
    "description": "Model ULC-03 — Resort-style luxury outdoor cabana. Features structural steel or aluminium framing cladded in weather-proof curtains and daybed cushions. Creates an intimate, shaded retreat for hotels and residential pools.",
    "features": [
      "Heavy structural frame with marine-grade coating",
      "UV-protected quick-dry daybed mattress",
      "Privacy curtains in Sunbrella canvas",
      "Integrated side shelves and beverage pockets"
    ],
    "specifications": {
      "materials": "Structural steel or anodized aluminum framework; Sunbrella performance fabrics; quick-dry foam.",
      "dimensions": "Standard footprint: 2000 mm x 2000 mm x 2200 mm clearance height.",
      "installation": "Free-standing with leveling feet or anchored to deck brackets.",
      "sustainability": "High-integrity structures with extended service life; recyclable materials."
    },
    "options": {
      "wood": [
        "White composite details",
        "Teak accents"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Standard daybed pavilion",
        "Double pavilion with privacy divider"
      ]
    }
  },
  {
    "id": "ulc-04",
    "title": "ULC-04",
    "line": "Luxury Poolside Cabana",
    "category": "cabanas",
    "url": "/product/ulc-04",
    "image": "/products/all_white/8-4.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/8-4.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Shaded daybed pavilions for high-end resorts.",
    "description": "Model ULC-04 — Resort-style luxury outdoor cabana. Features structural steel or aluminium framing cladded in weather-proof curtains and daybed cushions. Creates an intimate, shaded retreat for hotels and residential pools.",
    "features": [
      "Heavy structural frame with marine-grade coating",
      "UV-protected quick-dry daybed mattress",
      "Privacy curtains in Sunbrella canvas",
      "Integrated side shelves and beverage pockets"
    ],
    "specifications": {
      "materials": "Structural steel or anodized aluminum framework; Sunbrella performance fabrics; quick-dry foam.",
      "dimensions": "Standard footprint: 2000 mm x 2000 mm x 2200 mm clearance height.",
      "installation": "Free-standing with leveling feet or anchored to deck brackets.",
      "sustainability": "High-integrity structures with extended service life; recyclable materials."
    },
    "options": {
      "wood": [
        "White composite details",
        "Teak accents"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Standard daybed pavilion",
        "Double pavilion with privacy divider"
      ]
    }
  },
  {
    "id": "ulc-05",
    "title": "ULC-05",
    "line": "Luxury Poolside Cabana",
    "category": "cabanas",
    "url": "/product/ulc-05",
    "image": "/products/all_white/8-5.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/8-5.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Shaded daybed pavilions for high-end resorts.",
    "description": "Model ULC-05 — Resort-style luxury outdoor cabana. Features structural steel or aluminium framing cladded in weather-proof curtains and daybed cushions. Creates an intimate, shaded retreat for hotels and residential pools.",
    "features": [
      "Heavy structural frame with marine-grade coating",
      "UV-protected quick-dry daybed mattress",
      "Privacy curtains in Sunbrella canvas",
      "Integrated side shelves and beverage pockets"
    ],
    "specifications": {
      "materials": "Structural steel or anodized aluminum framework; Sunbrella performance fabrics; quick-dry foam.",
      "dimensions": "Standard footprint: 2000 mm x 2000 mm x 2200 mm clearance height.",
      "installation": "Free-standing with leveling feet or anchored to deck brackets.",
      "sustainability": "High-integrity structures with extended service life; recyclable materials."
    },
    "options": {
      "wood": [
        "White composite details",
        "Teak accents"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Standard daybed pavilion",
        "Double pavilion with privacy divider"
      ]
    }
  },
  {
    "id": "ulc-06",
    "title": "ULC-06",
    "line": "Luxury Poolside Cabana",
    "category": "cabanas",
    "url": "/product/ulc-06",
    "image": "/products/all_white/8.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/8.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Shaded daybed pavilions for high-end resorts.",
    "description": "Model ULC-06 — Resort-style luxury outdoor cabana. Features structural steel or aluminium framing cladded in weather-proof curtains and daybed cushions. Creates an intimate, shaded retreat for hotels and residential pools.",
    "features": [
      "Heavy structural frame with marine-grade coating",
      "UV-protected quick-dry daybed mattress",
      "Privacy curtains in Sunbrella canvas",
      "Integrated side shelves and beverage pockets"
    ],
    "specifications": {
      "materials": "Structural steel or anodized aluminum framework; Sunbrella performance fabrics; quick-dry foam.",
      "dimensions": "Standard footprint: 2000 mm x 2000 mm x 2200 mm clearance height.",
      "installation": "Free-standing with leveling feet or anchored to deck brackets.",
      "sustainability": "High-integrity structures with extended service life; recyclable materials."
    },
    "options": {
      "wood": [
        "White composite details",
        "Teak accents"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Standard daybed pavilion",
        "Double pavilion with privacy divider"
      ]
    }
  },
  {
    "id": "ulp-02",
    "title": "ULP-02",
    "line": "Architectural Planter Box",
    "category": "planters",
    "url": "/product/ulp-02",
    "image": "/products/all_white/9-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/9-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Lightweight concrete cultivation islands for smart cities.",
    "description": "Model ULP-02 — Architectural double-walled concrete planter pot. Insulated cavity protects roots from extreme temperatures. Finished in smooth all-white sandstone aggregate with overflow drainage ports.",
    "features": [
      "Lightweight concrete offering extreme strength at reduced weight",
      "Double-walled interior cavity for root temperature insulation",
      "Built-in overflow drainage channels",
      "Modern clean architectural profile"
    ],
    "specifications": {
      "materials": "Lightweight concrete mix; internal waterproof sealant; polyurethane insulation core.",
      "dimensions": "Standard rectangular box: 1200 mm length, 600 mm width, 600 mm height.",
      "installation": "Placed directly on pathways or plazas; leveling pads compensate for slopes.",
      "sustainability": "Self-watering design reduces consumption; low-impact aggregate mix."
    },
    "options": {
      "wood": [
        "No timber accents",
        "Top edge timber trim"
      ],
      "metal": [
        "Smooth Sandstone White",
        "Textured Granite White"
      ],
      "modules": [
        "Rectangular planter set",
        "Square planter cube"
      ]
    }
  },
  {
    "id": "ulp-03",
    "title": "ULP-03",
    "line": "Architectural Planter Box",
    "category": "planters",
    "url": "/product/ulp-03",
    "image": "/products/all_white/9-3.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/9-3.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Lightweight concrete cultivation islands for smart cities.",
    "description": "Model ULP-03 — Architectural double-walled concrete planter pot. Insulated cavity protects roots from extreme temperatures. Finished in smooth all-white sandstone aggregate with overflow drainage ports.",
    "features": [
      "Lightweight concrete offering extreme strength at reduced weight",
      "Double-walled interior cavity for root temperature insulation",
      "Built-in overflow drainage channels",
      "Modern clean architectural profile"
    ],
    "specifications": {
      "materials": "Lightweight concrete mix; internal waterproof sealant; polyurethane insulation core.",
      "dimensions": "Standard rectangular box: 1200 mm length, 600 mm width, 600 mm height.",
      "installation": "Placed directly on pathways or plazas; leveling pads compensate for slopes.",
      "sustainability": "Self-watering design reduces consumption; low-impact aggregate mix."
    },
    "options": {
      "wood": [
        "No timber accents",
        "Top edge timber trim"
      ],
      "metal": [
        "Smooth Sandstone White",
        "Textured Granite White"
      ],
      "modules": [
        "Rectangular planter set",
        "Square planter cube"
      ]
    }
  },
  {
    "id": "ulp-04",
    "title": "ULP-04",
    "line": "Architectural Planter Box",
    "category": "planters",
    "url": "/product/ulp-04",
    "image": "/products/all_white/9-4.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/9-4.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Lightweight concrete cultivation islands for smart cities.",
    "description": "Model ULP-04 — Architectural double-walled concrete planter pot. Insulated cavity protects roots from extreme temperatures. Finished in smooth all-white sandstone aggregate with overflow drainage ports.",
    "features": [
      "Lightweight concrete offering extreme strength at reduced weight",
      "Double-walled interior cavity for root temperature insulation",
      "Built-in overflow drainage channels",
      "Modern clean architectural profile"
    ],
    "specifications": {
      "materials": "Lightweight concrete mix; internal waterproof sealant; polyurethane insulation core.",
      "dimensions": "Standard rectangular box: 1200 mm length, 600 mm width, 600 mm height.",
      "installation": "Placed directly on pathways or plazas; leveling pads compensate for slopes.",
      "sustainability": "Self-watering design reduces consumption; low-impact aggregate mix."
    },
    "options": {
      "wood": [
        "No timber accents",
        "Top edge timber trim"
      ],
      "metal": [
        "Smooth Sandstone White",
        "Textured Granite White"
      ],
      "modules": [
        "Rectangular planter set",
        "Square planter cube"
      ]
    }
  },
  {
    "id": "ulp-05",
    "title": "ULP-05",
    "line": "Architectural Planter Box",
    "category": "planters",
    "url": "/product/ulp-05",
    "image": "/products/all_white/9.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/9.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Lightweight concrete cultivation islands for smart cities.",
    "description": "Model ULP-05 — Best Outdoor Furniture in Mumbai. Architectural double-walled concrete planter pot. Insulated cavity protects roots from extreme temperatures. Finished in smooth all-white sandstone aggregate with overflow drainage ports.",
    "features": [
      "Lightweight concrete offering extreme strength at reduced weight",
      "Double-walled interior cavity for root temperature insulation",
      "Built-in overflow drainage channels",
      "Modern clean architectural profile"
    ],
    "specifications": {
      "materials": "Lightweight concrete mix; internal waterproof sealant; polyurethane insulation core.",
      "dimensions": "Standard rectangular box: 1200 mm length, 600 mm width, 600 mm height.",
      "installation": "Placed directly on pathways or plazas; leveling pads compensate for slopes.",
      "sustainability": "Self-watering design reduces consumption; low-impact aggregate mix."
    },
    "options": {
      "wood": [
        "No timber accents",
        "Top edge timber trim"
      ],
      "metal": [
        "Smooth Sandstone White",
        "Textured Granite White"
      ],
      "modules": [
        "Rectangular planter set",
        "Square planter cube"
      ]
    }
  },
  {
    "id": "ulct-02",
    "title": "ULCT-02",
    "line": "Heavy-Duty Canteen Dining Set",
    "category": "canteen-tables",
    "url": "/product/ulct-02",
    "image": "/products/all_white/10-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/10-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Heavy-Duty Canteen Dining Set",
    "description": "Model ULCT-02 — Corporate-grade canteen dining set with connected seating. Built with heavy-duty galvanized steel framing and premium High-Pressure Laminate (HPL) tops, ensuring high hygiene and weather-proofing.",
    "features": [
      "Connected table and bench configuration prevents shifting",
      "Tamper-proof vandal-resistant assembly bolts",
      "Hygiene-optimized HPL table and seat surfaces",
      "Anti-pooling drainage slots"
    ],
    "specifications": {
      "materials": "Galvanized structural steel frame; 12mm exterior-grade HPL panels; stainless steel hardware.",
      "dimensions": "Overall footprint: 1800 mm width, 1600 mm depth, 750 mm table height.",
      "installation": "Concealed chemical concrete bolts grouted down.",
      "sustainability": "Recyclable metal framing; HPL uses organic pulp and non-toxic resins."
    },
    "options": {
      "wood": [
        "White HPL panels",
        "Robinia timber panels"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Signal White finish"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulct-03",
    "title": "ULCT-03",
    "line": "Heavy-Duty Canteen Dining Set",
    "category": "canteen-tables",
    "url": "/product/ulct-03",
    "image": "/products/all_white/10-3.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/10-3.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Heavy-Duty Canteen Dining Set",
    "description": "Model ULCT-03 — Corporate-grade canteen dining set with connected seating. Built with heavy-duty galvanized steel framing and premium High-Pressure Laminate (HPL) tops, ensuring high hygiene and weather-proofing.",
    "features": [
      "Connected table and bench configuration prevents shifting",
      "Tamper-proof vandal-resistant assembly bolts",
      "Hygiene-optimized HPL table and seat surfaces",
      "Anti-pooling drainage slots"
    ],
    "specifications": {
      "materials": "Galvanized structural steel frame; 12mm exterior-grade HPL panels; stainless steel hardware.",
      "dimensions": "Overall footprint: 1800 mm width, 1600 mm depth, 750 mm table height.",
      "installation": "Concealed chemical concrete bolts grouted down.",
      "sustainability": "Recyclable metal framing; HPL uses organic pulp and non-toxic resins."
    },
    "options": {
      "wood": [
        "White HPL panels",
        "Robinia timber panels"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Signal White finish"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulct-04",
    "title": "ULCT-04",
    "line": "Heavy-Duty Canteen Dining Set",
    "category": "canteen-tables",
    "url": "/product/ulct-04",
    "image": "/products/all_white/10-4.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/10-4.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Heavy-Duty Canteen Dining Set",
    "description": "Model ULCT-04 — Corporate-grade canteen dining set with connected seating. Built with heavy-duty galvanized steel framing and premium High-Pressure Laminate (HPL) tops, ensuring high hygiene and weather-proofing.",
    "features": [
      "Connected table and bench configuration prevents shifting",
      "Tamper-proof vandal-resistant assembly bolts",
      "Hygiene-optimized HPL table and seat surfaces",
      "Anti-pooling drainage slots"
    ],
    "specifications": {
      "materials": "Galvanized structural steel frame; 12mm exterior-grade HPL panels; stainless steel hardware.",
      "dimensions": "Overall footprint: 1800 mm width, 1600 mm depth, 750 mm table height.",
      "installation": "Concealed chemical concrete bolts grouted down.",
      "sustainability": "Recyclable metal framing; HPL uses organic pulp and non-toxic resins."
    },
    "options": {
      "wood": [
        "White HPL panels",
        "Robinia timber panels"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Signal White finish"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulct-05",
    "title": "ULCT-05",
    "line": "Heavy-Duty Canteen Dining Set",
    "category": "canteen-tables",
    "url": "/product/ulct-05",
    "image": "/products/all_white/10.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/10.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Heavy-Duty Canteen Dining Set",
    "description": "Model ULCT-05 — Corporate-grade canteen dining set with connected seating. Built with heavy-duty galvanized steel framing and premium High-Pressure Laminate (HPL) tops, ensuring high hygiene and weather-proofing.",
    "features": [
      "Connected table and bench configuration prevents shifting",
      "Tamper-proof vandal-resistant assembly bolts",
      "Hygiene-optimized HPL table and seat surfaces",
      "Anti-pooling drainage slots"
    ],
    "specifications": {
      "materials": "Galvanized structural steel frame; 12mm exterior-grade HPL panels; stainless steel hardware.",
      "dimensions": "Overall footprint: 1800 mm width, 1600 mm depth, 750 mm table height.",
      "installation": "Concealed chemical concrete bolts grouted down.",
      "sustainability": "Recyclable metal framing; HPL uses organic pulp and non-toxic resins."
    },
    "options": {
      "wood": [
        "White HPL panels",
        "Robinia timber panels"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Signal White finish"
      ],
      "modules": [
        "4-seater dining set",
        "6-seater dining set",
        "8-seater dining set"
      ]
    }
  },
  {
    "id": "ulcs-02",
    "title": "ULCS-02",
    "line": "Premium Vehicle Canopy",
    "category": "car-shelters",
    "url": "/product/ulcs-02",
    "image": "/products/all_white/11-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/11-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "High-tensile modular car parking structures.",
    "description": "Model ULCS-02 — Modern cantilever car shelter structure. Protects vehicles from intense sun, rain, and UV damage. Premium white PVDF tensile membrane canopy roofing supported by heavy-gauge steel H-beams.",
    "features": [
      "Cantilever support columns for unobstructed parking entries",
      "High-tensile PVDF membrane canopy with 100% UV block",
      "Wind-load certified structural steel chassis",
      "Integrated downspout drainage inside columns"
    ],
    "specifications": {
      "materials": "Heavy structural steel beams; epoxy-zinc primer and white PU finish; PVDF tensile fabric.",
      "dimensions": "Single car bay: 5000 mm length, 3000 mm width, 2500 mm clearance height.",
      "installation": "Deep foundation anchor cages embedded in concrete block footings.",
      "sustainability": "PVDF self-cleaning membrane; design optimized for PV solar and EV charger integrations."
    },
    "options": {
      "wood": [
        "No timber accents",
        "WPC wrap details on columns"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Hot-dip galvanized finish"
      ],
      "modules": [
        "Single Cantilever Bay",
        "Double Gull-wing Bay"
      ]
    }
  },
  {
    "id": "ulcs-03",
    "title": "ULCS-03",
    "line": "Premium Vehicle Canopy",
    "category": "car-shelters",
    "url": "/product/ulcs-03",
    "image": "/products/all_white/11.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/11.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "High-tensile modular car parking structures.",
    "description": "Model ULCS-03 — Modern cantilever car shelter structure. Protects vehicles from intense sun, rain, and UV damage. Premium white PVDF tensile membrane canopy roofing supported by heavy-gauge steel H-beams.",
    "features": [
      "Cantilever support columns for unobstructed parking entries",
      "High-tensile PVDF membrane canopy with 100% UV block",
      "Wind-load certified structural steel chassis",
      "Integrated downspout drainage inside columns"
    ],
    "specifications": {
      "materials": "Heavy structural steel beams; epoxy-zinc primer and white PU finish; PVDF tensile fabric.",
      "dimensions": "Single car bay: 5000 mm length, 3000 mm width, 2500 mm clearance height.",
      "installation": "Deep foundation anchor cages embedded in concrete block footings.",
      "sustainability": "PVDF self-cleaning membrane; design optimized for PV solar and EV charger integrations."
    },
    "options": {
      "wood": [
        "No timber accents",
        "WPC wrap details on columns"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Hot-dip galvanized finish"
      ],
      "modules": [
        "Single Cantilever Bay",
        "Double Gull-wing Bay"
      ]
    }
  },
  {
    "id": "uldb-02",
    "title": "ULDB-02",
    "line": "Litter & Recycling Bin",
    "category": "dustbins",
    "url": "/product/uldb-02",
    "image": "/products/all_white/12-2.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/12-2.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Robust waste segregation containers for public spaces.",
    "description": "Model ULDB-02 — Premium segregated litter and recycling bin. Made of galvanized steel and WPC composite cladding. Features key locks, rain hood lids, and easy-pull galvanized liners.",
    "features": [
      "Dual or triple compartments for dry/wet recycling segregation",
      "Tamper-proof cylinder keys and casing locks",
      "Easy-pull inner liners with handles",
      "Anti-rain hood lid protects contents"
    ],
    "specifications": {
      "materials": "Textured powder-coated sheet steel; grade 304 stainless steel lid; galvanized liners.",
      "dimensions": "Double sorting station: 1000 mm width, 500 mm depth, 950 mm height. Capacity: 150L.",
      "installation": "Internal flange anchor bolts secured to concrete pavements.",
      "sustainability": "Encourages waste segregation; 100% recyclable casings."
    },
    "options": {
      "wood": [
        "White composite cladding",
        "Natural teak cladding"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Single Litter Bin",
        "Double Segregation Bin",
        "Triple Segregation Bin"
      ]
    }
  },
  {
    "id": "uldb-03",
    "title": "ULDB-03",
    "line": "Litter & Recycling Bin",
    "category": "dustbins",
    "url": "/product/uldb-03",
    "image": "/products/all_white/12.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/12.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Robust waste segregation containers for public spaces.",
    "description": "Model ULDB-03 — Premium segregated litter and recycling bin. Made of galvanized steel and WPC composite cladding. Features key locks, rain hood lids, and easy-pull galvanized liners.",
    "features": [
      "Dual or triple compartments for dry/wet recycling segregation",
      "Tamper-proof cylinder keys and casing locks",
      "Easy-pull inner liners with handles",
      "Anti-rain hood lid protects contents"
    ],
    "specifications": {
      "materials": "Textured powder-coated sheet steel; grade 304 stainless steel lid; galvanized liners.",
      "dimensions": "Double sorting station: 1000 mm width, 500 mm depth, 950 mm height. Capacity: 150L.",
      "installation": "Internal flange anchor bolts secured to concrete pavements.",
      "sustainability": "Encourages waste segregation; 100% recyclable casings."
    },
    "options": {
      "wood": [
        "White composite cladding",
        "Natural teak cladding"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Single Litter Bin",
        "Double Segregation Bin",
        "Triple Segregation Bin"
      ]
    }
  },
  {
    "id": "ulsb-01",
    "title": "ULSB-01",
    "line": "Premium Safety Bollard",
    "category": "ss-bollards",
    "url": "/product/ulsb-01",
    "image": "/products/all_white/13.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/13.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "High-impact security and pathway boundary bollards.",
    "description": "Model ULSB-01 — Architectural safety and boundary bollard. Made from heavy-wall stainless steel with high-impact resistance. Features clean reflective security rings and polished cap.",
    "features": [
      "High-impact structural grade stainless steel tube",
      "Concealed safety reflective rings for night visibility",
      "Weatherproof and corrosion-resistant polished finish",
      "In-ground or surface bolt-down mounting options"
    ],
    "specifications": {
      "materials": "Heavy-wall Grade 304 or 316 Stainless Steel; safety reflective tape.",
      "dimensions": "Diameter: 114 mm, Height: 900 mm above ground, Inground depth: 300 mm.",
      "installation": "Cast in concrete foundation (in-ground) or safety flanged.",
      "sustainability": "Indefinite service life with zero degradation; 100% recyclable."
    },
    "options": {
      "wood": [
        "No wood trim"
      ],
      "metal": [
        "Brushed Stainless Steel",
        "Polished Stainless Steel",
        "White powder-coated steel"
      ],
      "modules": [
        "Surface Bolt-down Bollard",
        "Inground Cast Bollard",
        "Removable Lockable Bollard"
      ]
    }
  },
  {
    "id": "ulmw-01",
    "title": "ULMW-01",
    "line": "Architectural Tree Guard",
    "category": "metal-wooden-furniture",
    "url": "/product/ulmw-01",
    "image": "/products/all_white/14.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/14.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Heavy-duty protective grilles and guards for streetscapes.",
    "description": "Model ULMW-01 — Premium architectural tree guard grille. Protects young street trees from public impact and soil compaction while maintaining natural watering slots and clean geometry.",
    "features": [
      "Heavy-gauge carbon steel grille structure",
      "Modular segments assemble easily around tree base",
      "Anti-compacting soil protection grilles",
      "Premium weather-proof powder coating"
    ],
    "specifications": {
      "materials": "Laser-cut steel frame with duplex anti-rust primer and Akzonobel powder coating.",
      "dimensions": "External dimensions: 1200 mm x 1200 mm, internal tree opening: 500 mm diameter.",
      "installation": "Assembled with stainless steel security bolts directly onto subframe grates.",
      "sustainability": "Supports urban afforestation; 100% recyclable structure."
    },
    "options": {
      "wood": [
        "No wood trim"
      ],
      "metal": [
        "Powder-coated Polar White",
        "Textured Satin White"
      ],
      "modules": [
        "Square tree guard grille",
        "Round tree guard grille"
      ]
    }
  },
  {
    "id": "ulb-53",
    "title": "ULB-53",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-53",
    "image": "/products/all_white/New-Project-1-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-1-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 1 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-54",
    "title": "ULB-54",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-54",
    "image": "/products/all_white/New-Project-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 2 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-55",
    "title": "ULB-55",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-55",
    "image": "/products/all_white/New-Project-2-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-2-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 3 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-56",
    "title": "ULB-56",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-56",
    "image": "/products/all_white/New-Project-3-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-3-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 4 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-57",
    "title": "ULB-57",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-57",
    "image": "/products/all_white/New-Project-3.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-3.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 5 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-58",
    "title": "ULB-58",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-58",
    "image": "/products/all_white/New-Project-4-1.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-4-1.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 6 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-59",
    "title": "ULB-59",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-59",
    "image": "/products/all_white/New-Project-6.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-6.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 7 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-60",
    "title": "ULB-60",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-60",
    "image": "/products/all_white/New-Project-7.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project-7.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 8 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-61",
    "title": "ULB-61",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-61",
    "image": "/products/all_white/New-Project.webp_202606080031.jpeg",
    "gallery": [
      "/products/all_white/New-Project.webp_202606080031.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULW-NP 9 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-02",
    "title": "ULB-02",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-02",
    "image": "/products/all_white/outdoor_benches_ulb_01.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_01.jpeg",
      "/products/all_white/outdoor_benches_ulb_01_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-02 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-03",
    "title": "ULB-03",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-03",
    "image": "/products/all_white/outdoor_benches_ulb_02.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_02.jpeg",
      "/products/all_white/outdoor_benches_ulb_02_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-03 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-04",
    "title": "ULB-04",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-04",
    "image": "/products/all_white/outdoor_benches_ulb_03.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_03.jpeg",
      "/products/all_white/outdoor_benches_ulb_03_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-04 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-05",
    "title": "ULB-05",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-05",
    "image": "/products/all_white/outdoor_benches_ulb_04.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_04.jpeg",
      "/products/all_white/outdoor_benches_ulb_04_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-05 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-06",
    "title": "ULB-06",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-06",
    "image": "/products/all_white/outdoor_benches_ulb_05.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_05.jpeg",
      "/products/all_white/outdoor_benches_ulb_05_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-06 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-07",
    "title": "ULB-07",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-07",
    "image": "/products/all_white/outdoor_benches_ulb_06.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_06.jpeg",
      "/products/all_white/outdoor_benches_ulb_06_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-07 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-08",
    "title": "ULB-08",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-08",
    "image": "/products/all_white/outdoor_benches_ulb_07.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_07.jpeg",
      "/products/all_white/outdoor_benches_ulb_07_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-08 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-09",
    "title": "ULB-09",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-09",
    "image": "/products/all_white/outdoor_benches_ulb_08.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_08.jpeg",
      "/products/all_white/outdoor_benches_ulb_08_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-09 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-10",
    "title": "ULB-10",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-10",
    "image": "/products/all_white/outdoor_benches_ulb_09.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_09.jpeg",
      "/products/all_white/outdoor_benches_ulb_09_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-10 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-11",
    "title": "ULB-11",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-11",
    "image": "/products/all_white/outdoor_benches_ulb_10.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_10.jpeg",
      "/products/all_white/outdoor_benches_ulb_10_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-11 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-12",
    "title": "ULB-12",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-12",
    "image": "/products/all_white/outdoor_benches_ulb_11.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_11.jpeg",
      "/products/all_white/outdoor_benches_ulb_11_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-12 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-13",
    "title": "ULB-13",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-13",
    "image": "/products/all_white/outdoor_benches_ulb_12.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_12.jpeg",
      "/products/all_white/outdoor_benches_ulb_12_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-13 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-14",
    "title": "ULB-14",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-14",
    "image": "/products/all_white/outdoor_benches_ulb_13.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_13.jpeg",
      "/products/all_white/outdoor_benches_ulb_13_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-14 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-15",
    "title": "ULB-15",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-15",
    "image": "/products/all_white/outdoor_benches_ulb_14.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_14.jpeg",
      "/products/all_white/outdoor_benches_ulb_14_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-15 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-16",
    "title": "ULB-16",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-16",
    "image": "/products/all_white/outdoor_benches_ulb_15.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_15.jpeg",
      "/products/all_white/outdoor_benches_ulb_15_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-16 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-17",
    "title": "ULB-17",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-17",
    "image": "/products/all_white/outdoor_benches_ulb_16.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_16.jpeg",
      "/products/all_white/outdoor_benches_ulb_16_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-17 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-18",
    "title": "ULB-18",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-18",
    "image": "/products/all_white/outdoor_benches_ulb_17.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_17.jpeg",
      "/products/all_white/outdoor_benches_ulb_17_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-18 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-19",
    "title": "ULB-19",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-19",
    "image": "/products/all_white/outdoor_benches_ulb_18.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_18.jpeg",
      "/products/all_white/outdoor_benches_ulb_18_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-19 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-20",
    "title": "ULB-20",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-20",
    "image": "/products/all_white/outdoor_benches_ulb_19.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_19.jpeg",
      "/products/all_white/outdoor_benches_ulb_19_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-20 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-21",
    "title": "ULB-21",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-21",
    "image": "/products/all_white/outdoor_benches_ulb_20.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_20.jpeg",
      "/products/all_white/outdoor_benches_ulb_20_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-21 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-22",
    "title": "ULB-22",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-22",
    "image": "/products/all_white/outdoor_benches_ulb_21.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_21.jpeg",
      "/products/all_white/outdoor_benches_ulb_21_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-22 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-23",
    "title": "ULB-23",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-23",
    "image": "/products/all_white/outdoor_benches_ulb_22.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_22.jpeg",
      "/products/all_white/outdoor_benches_ulb_22_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-23 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-24",
    "title": "ULB-24",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-24",
    "image": "/products/all_white/outdoor_benches_ulb_23.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_23.jpeg",
      "/products/all_white/outdoor_benches_ulb_23_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-24 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-25",
    "title": "ULB-25",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-25",
    "image": "/products/all_white/outdoor_benches_ulb_24.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_24.jpeg",
      "/products/all_white/outdoor_benches_ulb_24_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-25 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-26",
    "title": "ULB-26",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-26",
    "image": "/products/all_white/outdoor_benches_ulb_25.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_25.jpeg",
      "/products/all_white/outdoor_benches_ulb_25_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-26 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-27",
    "title": "ULB-27",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-27",
    "image": "/products/all_white/outdoor_benches_ulb_26.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_26.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-27 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-28",
    "title": "ULB-28",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-28",
    "image": "/products/all_white/outdoor_benches_ulb_27.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_27.jpeg",
      "/products/all_white/outdoor_benches_ulb_27_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-28 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-29",
    "title": "ULB-29",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-29",
    "image": "/products/all_white/outdoor_benches_ulb_28.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_28.jpeg",
      "/products/all_white/outdoor_benches_ulb_28_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-29 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-30",
    "title": "ULB-30",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-30",
    "image": "/products/all_white/outdoor_benches_ulb_29.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_29.jpeg",
      "/products/all_white/outdoor_benches_ulb_29_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-30 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-31",
    "title": "ULB-31",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-31",
    "image": "/products/all_white/outdoor_benches_ulb_30.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_30.jpeg",
      "/products/all_white/outdoor_benches_ulb_30_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-31 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-32",
    "title": "ULB-32",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-32",
    "image": "/products/all_white/outdoor_benches_ulb_31.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_31.jpeg",
      "/products/all_white/outdoor_benches_ulb_31_ugc.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-32 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  },
  {
    "id": "ulb-33",
    "title": "ULB-33",
    "line": "Premium Outdoor Seating",
    "category": "benches",
    "url": "/product/ulb-33",
    "image": "/products/all_white/outdoor_benches_ulb_33.jpeg",
    "gallery": [
      "/products/all_white/outdoor_benches_ulb_33.jpeg"
    ],
    "badges": [
      "New",
      "White Collection"
    ],
    "tagline": "Ergonomic and weather-resistant public seating bench.",
    "description": "Model ULB-33 — Sleek all-white outdoor bench with heavy-duty weather treatment. Designed for modern public and residential outdoor environments, balancing robust strength with elegant styling.",
    "features": [
      "High-durability weather-resistant coating",
      "Concealed expansion anchoring system",
      "Modern all-white premium finish",
      "Minimal maintenance requirements"
    ],
    "specifications": {
      "materials": "Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.",
      "dimensions": "Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.",
      "installation": "Concealed surface mounting using expansion chemical concrete bolts.",
      "sustainability": "Eco-friendly materials; 100% recyclable metal frames and composite elements."
    },
    "options": {
      "wood": [
        "Pure White composite",
        "Eggshell White polymer"
      ],
      "metal": [
        "Powder-coated White (RAL 9016)",
        "Signal White (RAL 9003)"
      ],
      "modules": [
        "Standard 3-seater bench",
        "Standard 4-seater bench"
      ]
    }
  }
]
JSON;
    $products = json_decode( $products_json, true );
    if ( ! is_array( $products ) ) {
        return 0;
    }

    $import_count = 0;
    foreach ( $products as $prod ) {
        $slug = sanitize_title( $prod['id'] );
        $title = sanitize_text_field( $prod['title'] );
        $line = sanitize_text_field( $prod['line'] );
        $category = sanitize_text_field( $prod['category'] );
        $tagline = sanitize_text_field( $prod['tagline'] );
        $description = wp_kses_post( $prod['description'] );

        // Failsafe lookup using direct SQL query to prevent duplicate records and bypass WP query filters
        global $wpdb;
        $db_post_id = $wpdb->get_var( $wpdb->prepare(
            "SELECT ID FROM $wpdb->posts WHERE post_name = %s AND post_type = %s AND post_status != 'trash' LIMIT 1",
            $slug,
            'urbanland_product'
        ) );

        $post_data = array(
            'post_title'   => $title,
            'post_content' => $description,
            'post_excerpt' => $tagline,
            'post_status'  => 'publish',
            'post_type'    => 'urbanland_product',
            'post_name'    => $slug,
        );

        if ( $db_post_id ) {
            $post_data['ID'] = $db_post_id;
            $result_id = wp_update_post( $post_data, true ); // Return WP_Error on failure
        } else {
            $result_id = wp_insert_post( $post_data, true ); // Return WP_Error on failure
        }

        if ( ! $result_id || is_wp_error( $result_id ) ) {
            if ( is_wp_error( $result_id ) ) {
                error_log( 'Urbanland Sync Error: ' . $result_id->get_error_message() );
            } else {
                error_log( 'Urbanland Sync Error: Unknown error inserting product ' . $title );
            }
            continue;
        }

        $post_id = $result_id;

        // Set taxonomy term
        $term = term_exists( $category, 'urbanland_product_cat' );
        if ( ! $term ) {
            $term = wp_insert_term( $category, 'urbanland_product_cat' );
        }
        if ( ! is_wp_error( $term ) && isset( $term['term_id'] ) ) {
            wp_set_object_terms( $post_id, intval( $term['term_id'] ), 'urbanland_product_cat' );
        }

        // Save metadata
        update_post_meta( $post_id, '_urbanland_line', $line );
        update_post_meta( $post_id, '_urbanland_category', $category );
        update_post_meta( $post_id, '_urbanland_tagline', $tagline );
        update_post_meta( $post_id, '_urbanland_description', $description );

        // Array / Structured Object Metas
        update_post_meta( $post_id, '_urbanland_gallery', $prod['gallery'] );
        update_post_meta( $post_id, '_urbanland_badges', $prod['badges'] );
        update_post_meta( $post_id, '_urbanland_features', $prod['features'] );
        update_post_meta( $post_id, '_urbanland_specifications', $prod['specifications'] );
        update_post_meta( $post_id, '_urbanland_options', $prod['options'] );

        $import_count++;
    }

    return $import_count;
}
