import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './model/product.model.js'

dotenv.config()

const products = [
  // --- Electronics (7 items) ---
  {
    name: 'ShopKart CyberBlade Mechanical Keyboard',
    description: 'Hot-swappable tactile RGB mechanical keyboard with CNC aluminum chassis, sound dampening silicone, and double-shot PBT keycaps.',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    stock: 45
  },
  {
    name: 'AeroSonic Pro Wireless ANC Headphones',
    description: 'Studio-grade hybrid active noise cancellation, custom 40mm titanium drivers, 40-hour ultra battery life, and spatial audio support.',
    price: 279.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    stock: 32
  },
  {
    name: 'Vortex Ultra-Wide 34-Inch Curved Monitor',
    description: '165Hz refresh rate WQHD (3440x1440) 1500R curved gaming display with 1ms response time, HDR600, and USB-C 90W power delivery.',
    price: 549.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    stock: 18
  },
  {
    name: 'PulseSync Titan Smartwatch',
    description: 'Titanium bezel with sapphire glass multisport GPS smartwatch, continuous ECG, VO2 max metrics, sleep tracking, and vivid AMOLED screen.',
    price: 219.50,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    stock: 60
  },
  {
    name: 'Lumina 4K Ultra Webcam & Ringlight',
    description: 'Broadcast-quality 4K 60FPS streaming webcam with dual beamforming microphones, HDR compensation, and built-in adjustable ring light.',
    price: 99.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80',
    stock: 25
  },
  {
    name: 'HyperDrive 100W GaN Fast Charger',
    description: 'Ultra-compact 4-port Gallium Nitride (GaN) fast charger capable of simultaneous high-speed charging for laptops, tablets, and phones.',
    price: 49.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    stock: 85
  },
  {
    name: 'Stealth Wireless Precision Gaming Mouse',
    description: 'Featherlight 58g ergonomic wireless mouse with 26,000 DPI optical sensor, optical switches, and 100% pure PTFE glide feet.',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    stock: 50
  },

  // --- Fashion (7 items) ---
  {
    name: 'Monolith Techwear Waterproof Bomber Jacket',
    description: 'Water-repellent 3-layer breathable nylon shell with modular utility cargo pockets, taped seams, and magnetic fidlock closures.',
    price: 189.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    stock: 24
  },
  {
    name: 'Minimalist Heavyweight Boxy Hoodie',
    description: '480 GSM organic french terry cotton oversized drop-shoulder hoodie in washed charcoal with ribbed cuffs and double-layered hood.',
    price: 85.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    stock: 40
  },
  {
    name: 'AeroStride Zero-Gravity Sneakers',
    description: 'Engineered breathable knit upper with responsive nitrogen-infused foam midsole and reflective accents for maximum street comfort.',
    price: 139.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    stock: 35
  },
  {
    name: 'Urban Nomad Weatherproof Backpack',
    description: '24-liter rolltop weatherproof commuter pack with dedicated padded 16-inch laptop compartment and ergonomic ventilated straps.',
    price: 119.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    stock: 28
  },
  {
    name: 'Horizon Polarized Matte Acetate Sunglasses',
    description: 'Handcrafted Italian acetate frames featuring category 3 UV400 polarized scratch-resistant lenses and 5-barrel German hinges.',
    price: 69.50,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    stock: 55
  },
  {
    name: 'Tactical Relaxed-Fit Cargo Trousers',
    description: 'Ripstop stretch cotton trousers with articulated knees, reinforced deep cargo pockets, and adjustable tapered ankle cuffs.',
    price: 95.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    stock: 30
  },
  {
    name: 'Classic Heritage Leather Chelsea Boots',
    description: 'Full-grain waxed calfskin leather boots with durable Goodyear welted rubber lug outsole and flexible elastic side gussets.',
    price: 175.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80',
    stock: 15
  },

  // --- Home (7 items) ---
  {
    name: 'Aura Ultrasonic Ambient Mist Diffuser',
    description: 'Ceramic handcrafted aromatherapy essential oil diffuser with ultrasonic cool mist technology and relaxing amber glow LED modes.',
    price: 54.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    stock: 42
  },
  {
    name: 'Nordic Ergonomic Solid Walnut Desk',
    description: 'FSC-certified solid American walnut workstation desk with chamfered edges and concealed magnetic cable management channel.',
    price: 420.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    stock: 10
  },
  {
    name: 'Lumos Touch-Control Minimalist Desk Lamp',
    description: 'Sleek anodized aluminum task lamp with 5 color temperatures, touch brightness slider, and Qi fast wireless charging base.',
    price: 65.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    stock: 38
  },
  {
    name: 'Barista Craft Matte Black Pour-Over Kettle',
    description: 'Precision gooseneck pour-over kettle with integrated analog lid thermometer and ergonomic heat-resistant natural wood handle.',
    price: 48.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
    stock: 50
  },
  {
    name: 'Artisan Matte Ceramic Dinnerware Set',
    description: '16-piece handcrafted stoneware set with earthy reactive glaze, includes dinner plates, salad plates, soup bowls, and mugs.',
    price: 129.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
    stock: 22
  },
  {
    name: 'Zenith Memory Foam Contoured Pillow',
    description: 'Cooling gel-infused ergonomic orthopedic cervical neck pillow with removable, washable hypoallergenic bamboo fiber cover.',
    price: 39.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    stock: 65
  },
  {
    name: 'Abstract Canvas Wall Art - Neo Tokyo',
    description: 'Gallery-wrapped archival giclée print on 380 GSM textured cotton canvas framed in a brushed black metallic floating frame.',
    price: 89.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    stock: 19
  },

  // --- Books (6 items) ---
  {
    name: 'Designing Data-Intensive Applications',
    description: 'The definitive architectural guide to distributed data systems, replication, partitioning, transactions, and consensus protocols.',
    price: 42.50,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    stock: 55
  },
  {
    name: 'Neuromancer: Collector Hardcover Edition',
    description: 'William Gibson pioneering cyberpunk masterwork in a deluxe clothbound foiled edition with brand new exclusive foreword and illustrations.',
    price: 29.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    stock: 34
  },
  {
    name: 'Atomic Habits: The Proven Framework',
    description: 'James Clear internationally acclaimed practical guide on small changes, habit stacking, environment design, and remarkable results.',
    price: 21.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
    stock: 90
  },
  {
    name: 'Creative Selection: Inside Apple Design',
    description: 'Behind the scenes engineering rituals, iterative prototyping, and cultural lessons from the golden age of Apple product development.',
    price: 26.50,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    stock: 28
  },
  {
    name: 'The Art of Clean Code: Pragmatic Guide',
    description: 'Essential software craftsmanship principles for writing readable, maintainable, performant, and self-documenting modern applications.',
    price: 34.00,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=800&q=80',
    stock: 44
  },
  {
    name: 'Architecture & Utopia: Future Cities',
    description: 'Monograph analyzing speculative mega-structures, retro-futurism, brutalism, and sustainable urban design across modern history.',
    price: 58.00,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80',
    stock: 16
  },

  // --- Beauty (7 items) ---
  {
    name: 'HydraGlow Botanical Facial Serum',
    description: 'Multi-molecular hyaluronic acid and stabilized vitamin C antioxidant booster serum for plumper, radiant, barrier-supported skin.',
    price: 36.00,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    stock: 70
  },
  {
    name: 'Velvet Obsidian Eau De Parfum (50ml)',
    description: 'An evocative smoky fragrance fusing dark amber, Himalayan cedarwood, freshly crushed pink pepper, and warm Bourbon vanilla.',
    price: 110.00,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    stock: 25
  },
  {
    name: 'Deep Purifying Charcoal Clay Face Mask',
    description: 'Detoxifying mineral-rich French kaolin clay infused with active bamboo charcoal and salicylic acid to gently unclog congested pores.',
    price: 24.50,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1567928815116-f6d3ad6688bf?auto=format&fit=crop&w=800&q=80',
    stock: 52
  },
  {
    name: 'Luxe Nourishing Cold-Pressed Hair Oil',
    description: 'Weightless nutrient-dense blend of cold-pressed marula, argan, and camellia oils for brilliant high-gloss shine and thermal protection.',
    price: 32.00,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1608248597359-58b387ba9874?auto=format&fit=crop&w=800&q=80',
    stock: 45
  },
  {
    name: 'Organic Rosewater Soothing Facial Mist',
    description: 'Single-distilled organic Damask rose flower water with hydrating glycerin to instantly refresh and soothe sensitive or dry skin.',
    price: 19.99,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    stock: 60
  },
  {
    name: 'Sonic Silicone Facial Cleansing Device',
    description: 'IPX7 waterproof sonic vibrating face brush with ultra-soft antibacterial silicone bristles and 8 customizable pulsation levels.',
    price: 45.00,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    stock: 35
  },
  {
    name: 'Mineral Radiance SPF 50 Sunscreen',
    description: 'Ultra-lightweight invisible mineral sunscreen offering broad-spectrum UVA/UVB defense with niacinamide and zero white cast.',
    price: 28.00,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    stock: 80
  },

  // --- Grocery (6 items) ---
  {
    name: 'Single-Origin Ethiopian Yirgacheffe Beans',
    description: 'Freshly roasted whole bean specialty Arabica coffee featuring floral jasmine notes, bergamot citrus, and honey sweetness (500g).',
    price: 22.50,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    stock: 75
  },
  {
    name: 'Ceremonial Grade Uji Matcha Green Tea',
    description: 'Stone-ground first harvest organic matcha directly from Uji, Kyoto. Rich umami, vibrant emerald hue, and silky finish (30g tin).',
    price: 34.00,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    stock: 40
  },
  {
    name: 'Artisanal Raw Wildflower Honey',
    description: 'Cold-extracted unpasteurized raw honey from pesticide-free mountain meadows, rich in natural pollen, enzymes, and floral notes (450g).',
    price: 18.00,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    stock: 50
  },
  {
    name: 'Extra Virgin Cold Pressed Tuscan Olive Oil',
    description: 'Early-harvest single-estate Tuscan extra virgin olive oil with peppery finish, high polyphenol antioxidant count, and low acidity (750ml).',
    price: 27.50,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    stock: 38
  },
  {
    name: 'Bean-to-Bar 85% Dark Artisan Chocolate',
    description: 'Single-origin Ecuador cacao craft dark chocolate bar with delicate notes of roasted hazelnuts, dried plums, and sea salt flakes (80g).',
    price: 9.50,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    stock: 110
  },
  {
    name: 'Organic Roasted California Pistachios',
    description: 'Slow-roasted in-shell colossal California pistachios lightly dusted with natural mineral-rich Himalayan pink salt (400g pouch).',
    price: 16.50,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    stock: 65
  }
]

async function seedDatabase() {
  try {
    const mongoUri = process.env.dbURL || 'mongodb://localhost:27017/shopKart'
    console.log(`Connecting to MongoDB at: ${mongoUri}`)
    
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 })
    console.log('MongoDB connected successfully.')

    console.log(`Seeding ${products.length} catalog products...`)
    const result = await Product.insertMany(products)
    console.log(`Successfully added ${result.length} products to the catalogue!`)

    const count = await Product.countDocuments()
    console.log(`Total products now in database: ${count}`)

    await mongoose.disconnect()
    console.log('MongoDB connection closed.')
    process.exit(0)
  } catch (err) {
    console.error('Error seeding database:', err)
    process.exit(1)
  }
}

seedDatabase()
