export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  subcategory: string
  rating: number
  reviews: number
  inStock: boolean
  stockCount: number
  tags: string[]
  specifications: Record<string, string>
  badge?: string
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
    price: 24999,
    originalPrice: 33299,
    image: "/premium-wireless-headphones.png",
    images: ["/premium-wireless-headphones.png", "/headphones-side.jpg", "/headphones-case.jpg"],
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    stockCount: 15,
    tags: ["wireless", "noise-cancelling", "premium", "bluetooth"],
    specifications: {
      "Battery Life": "30 hours",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
      Warranty: "2 years",
    },
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description:
      "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, and 7-day battery life.",
    price: 16599,
    originalPrice: 20749,
    image: "/smart-fitness-watch.png",
    images: ["/smart-fitness-watch.png", "/watch-bands.jpg", "/watch-apps.jpg"],
    category: "Electronics",
    subcategory: "Wearables",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    stockCount: 23,
    tags: ["fitness", "smartwatch", "gps", "health"],
    specifications: {
      Display: "1.4 inch AMOLED",
      Battery: "7 days",
      "Water Resistance": "5ATM",
      Sensors: "Heart Rate, GPS, Accelerometer",
    },
    badge: "New",
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    description:
      "Enhance your workspace comfort with this premium ergonomic office chair featuring lumbar support, adjustable height, and breathable mesh fabric.",
    price: 37399,
    originalPrice: 49799,
    image: "/ergonomic-office-chair.png",
    images: ["/ergonomic-office-chair.png", "/chair-side.jpg", "/chair-features.jpg"],
    category: "Furniture",
    subcategory: "Office",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    stockCount: 8,
    tags: ["ergonomic", "office", "comfort", "adjustable"],
    specifications: {
      Material: "Breathable Mesh",
      "Weight Capacity": "300 lbs",
      Adjustability: "Height, Armrests, Lumbar",
      Warranty: "5 years",
    },
    badge: "Sale",
  },
  {
    id: "4",
    name: "4K Webcam Pro",
    description:
      "Professional 4K webcam with auto-focus, built-in microphone, and wide-angle lens perfect for streaming and video calls.",
    price: 10799,
    originalPrice: 14939,
    image: "/4k-webcam-professional.jpg",
    images: ["/4k-webcam-professional.jpg", "/webcam-setup.jpg", "/webcam-quality.jpg"],
    category: "Electronics",
    subcategory: "Cameras",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    stockCount: 31,
    tags: ["4k", "webcam", "streaming", "professional"],
    specifications: {
      Resolution: "4K @ 30fps",
      "Field of View": "90 degrees",
      Microphone: "Built-in stereo",
      Compatibility: "Windows, Mac, Linux",
    },
  },
  {
    id: "5",
    name: "Wireless Gaming Mouse",
    description:
      "High-precision wireless gaming mouse with customizable RGB lighting, programmable buttons, and ultra-fast response time.",
    price: 6639,
    originalPrice: 8299,
    image: "/gaming-mouse-rgb.jpg",
    images: ["/gaming-mouse-rgb.jpg", "/mouse-software.jpg", "/mouse-grip.jpg"],
    category: "Electronics",
    subcategory: "Gaming",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    stockCount: 42,
    tags: ["gaming", "wireless", "rgb", "precision"],
    specifications: {
      DPI: "Up to 16,000",
      Battery: "70 hours",
      Buttons: "8 programmable",
      Connectivity: "2.4GHz wireless",
    },
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life.",
    price: 4979,
    image: "/bluetooth-speaker-portable.jpg",
    images: ["/bluetooth-speaker-portable.jpg", "/speaker-waterproof.jpg", "/speaker-size.jpg"],
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.4,
    reviews: 234,
    inStock: true,
    stockCount: 18,
    tags: ["bluetooth", "portable", "waterproof", "wireless"],
    specifications: {
      "Battery Life": "12 hours",
      "Water Rating": "IPX7",
      Range: "30 feet",
      Output: "20W",
    },
  },
  {
    id: "7",
    name: "iPhone 15 Pro Max",
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system with 5x telephoto zoom.",
    price: 134900,
    originalPrice: 149900,
    image: "/iphone-15-pro-max-titanium.png",
    images: ["/iphone-15-pro-max-titanium.png", "/iphone-camera-system.jpg", "/iphone-accessories.jpg"],
    category: "Electronics",
    subcategory: "Mobile",
    rating: 4.9,
    reviews: 1247,
    inStock: true,
    stockCount: 12,
    tags: ["iphone", "smartphone", "premium", "camera"],
    specifications: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A17 Pro",
      Storage: "256GB",
      Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
    },
    badge: "Latest",
  },
  {
    id: "8",
    name: "Tempered Glass Screen Protector",
    description: "9H hardness tempered glass screen protector with oleophobic coating for iPhone 15 Pro Max.",
    price: 799,
    originalPrice: 1299,
    image: "/tempered-glass-screen-protector.jpg",
    images: ["/tempered-glass-screen-protector.jpg"],
    category: "Electronics",
    subcategory: "Mobile Accessories",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    stockCount: 156,
    tags: ["screen protector", "tempered glass", "iphone", "protection"],
    specifications: {
      Hardness: "9H",
      Thickness: "0.33mm",
      Compatibility: "iPhone 15 Pro Max",
      Features: "Anti-fingerprint, Bubble-free",
    },
  },
  {
    id: "9",
    name: "Leather Phone Case",
    description: "Premium leather back case with MagSafe compatibility for iPhone 15 Pro Max.",
    price: 2499,
    originalPrice: 3499,
    image: "/leather-phone-case-magsafe.jpg",
    images: ["/leather-phone-case-magsafe.jpg"],
    category: "Electronics",
    subcategory: "Mobile Accessories",
    rating: 4.6,
    reviews: 234,
    inStock: true,
    stockCount: 67,
    tags: ["phone case", "leather", "magsafe", "premium"],
    specifications: {
      Material: "Genuine Leather",
      Compatibility: "iPhone 15 Pro Max",
      Features: "MagSafe Compatible",
      Colors: "Black, Brown, Blue",
    },
  },
  {
    id: "10",
    name: "Samsung Galaxy S24 Ultra",
    description: "Flagship Android phone with S Pen, 200MP camera, and AI-powered features.",
    price: 124999,
    originalPrice: 139999,
    image: "/samsung-galaxy-s24-ultra-with-s-pen.jpg",
    images: ["/samsung-galaxy-s24-ultra-with-s-pen.jpg"],
    category: "Electronics",
    subcategory: "Mobile",
    rating: 4.8,
    reviews: 892,
    inStock: true,
    stockCount: 18,
    tags: ["samsung", "android", "s-pen", "camera"],
    specifications: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide + 10MP Telephoto",
    },
    badge: "AI Powered",
  },
  {
    id: "11",
    name: "Men's Cotton T-Shirt",
    description: "Premium 100% cotton t-shirt with comfortable fit and breathable fabric.",
    price: 899,
    originalPrice: 1299,
    image: "/placeholder-973oj.png",
    images: ["/placeholder-973oj.png"],
    category: "Fashion",
    subcategory: "Men",
    rating: 4.2,
    reviews: 156,
    inStock: true,
    stockCount: 89,
    tags: ["cotton", "t-shirt", "casual", "comfortable"],
    specifications: {
      Material: "100% Cotton",
      Fit: "Regular",
      Sizes: "S, M, L, XL, XXL",
      Care: "Machine Wash",
    },
  },
  {
    id: "12",
    name: "Women's Denim Jacket",
    description: "Stylish denim jacket with vintage wash and comfortable fit for all seasons.",
    price: 2499,
    originalPrice: 3499,
    image: "/placeholder-9ogxe.png",
    images: ["/placeholder-9ogxe.png"],
    category: "Fashion",
    subcategory: "Women",
    rating: 4.5,
    reviews: 78,
    inStock: true,
    stockCount: 34,
    tags: ["denim", "jacket", "vintage", "casual"],
    specifications: {
      Material: "100% Cotton Denim",
      Wash: "Vintage Blue",
      Sizes: "XS, S, M, L, XL",
      Style: "Classic Fit",
    },
  },
  {
    id: "13",
    name: "Kids' Superhero Costume",
    description: "Complete superhero costume set with cape, mask, and accessories for kids.",
    price: 1599,
    originalPrice: 2299,
    image: "/placeholder-diqlv.png",
    images: ["/placeholder-diqlv.png"],
    category: "Fashion",
    subcategory: "Kids",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    stockCount: 45,
    tags: ["costume", "superhero", "kids", "play"],
    specifications: {
      Ages: "3-12 years",
      Includes: "Costume, Cape, Mask, Belt",
      Material: "Polyester",
      Sizes: "Small, Medium, Large",
    },
    badge: "Popular",
  },
  {
    id: "14",
    name: "Leather Wallet",
    description: "Genuine leather wallet with RFID blocking technology and multiple card slots.",
    price: 1899,
    originalPrice: 2799,
    image: "/placeholder-9i6yn.png",
    images: ["/placeholder-9i6yn.png"],
    category: "Fashion",
    subcategory: "Accessories",
    rating: 4.4,
    reviews: 167,
    inStock: true,
    stockCount: 78,
    tags: ["wallet", "leather", "rfid", "accessories"],
    specifications: {
      Material: "Genuine Leather",
      Features: "RFID Blocking",
      Slots: "8 Card Slots + 2 Bill Compartments",
      Colors: "Black, Brown, Tan",
    },
  },
  {
    id: "15",
    name: "Coffee Maker Machine",
    description: "Automatic drip coffee maker with programmable timer and thermal carafe.",
    price: 8999,
    originalPrice: 12999,
    image: "/placeholder-7f5am.png",
    images: ["/placeholder-7f5am.png"],
    category: "Home & Garden",
    subcategory: "Kitchen",
    rating: 4.6,
    reviews: 345,
    inStock: true,
    stockCount: 23,
    tags: ["coffee", "kitchen", "automatic", "programmable"],
    specifications: {
      Capacity: "12 cups",
      Features: "Programmable Timer, Auto Shut-off",
      Carafe: "Thermal Stainless Steel",
      Warranty: "2 years",
    },
    badge: "Best Value",
  },
  {
    id: "16",
    name: "Bathroom Mirror with LED",
    description: "Modern bathroom mirror with built-in LED lighting and anti-fog technology.",
    price: 6499,
    originalPrice: 8999,
    image: "/placeholder-ub1ph.png",
    images: ["/placeholder-ub1ph.png"],
    category: "Home & Garden",
    subcategory: "Bathroom",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    stockCount: 15,
    tags: ["mirror", "led", "bathroom", "modern"],
    specifications: {
      Size: "24 x 32 inches",
      Features: "LED Lighting, Anti-fog, Touch Switch",
      Installation: "Wall Mount",
      Power: "12V LED",
    },
  },
  {
    id: "17",
    name: "Garden Tool Set",
    description: "Complete 10-piece garden tool set with ergonomic handles and storage bag.",
    price: 3499,
    originalPrice: 4999,
    image: "/placeholder-zpu10.png",
    images: ["/placeholder-zpu10.png"],
    category: "Home & Garden",
    subcategory: "Garden",
    rating: 4.5,
    reviews: 123,
    inStock: true,
    stockCount: 34,
    tags: ["garden", "tools", "ergonomic", "complete set"],
    specifications: {
      Pieces: "10 tools",
      Includes: "Trowel, Pruner, Weeder, Cultivator, etc.",
      Handles: "Ergonomic Grip",
      Storage: "Canvas Bag Included",
    },
  },
  {
    id: "18",
    name: "Decorative Wall Art",
    description: "Modern abstract wall art canvas print set for living room decoration.",
    price: 2999,
    originalPrice: 4499,
    image: "/modern-abstract-wall-art-canvas.jpg",
    images: ["/modern-abstract-wall-art-canvas.jpg"],
    category: "Home & Garden",
    subcategory: "Decor",
    rating: 4.2,
    reviews: 67,
    inStock: true,
    stockCount: 56,
    tags: ["wall art", "canvas", "modern", "decoration"],
    specifications: {
      Size: "Set of 3 - 12x16 inches each",
      Material: "Canvas Print",
      Frame: "Ready to Hang",
      Style: "Modern Abstract",
    },
  },
  {
    id: "19",
    name: "Yoga Mat Premium",
    description: "Non-slip yoga mat with extra thickness for comfort and superior grip.",
    price: 2499,
    originalPrice: 3499,
    image: "/yoga-mat-premium-non-slip-thick.jpg",
    images: ["/yoga-mat-premium-non-slip-thick.jpg"],
    category: "Sports",
    subcategory: "Fitness",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    stockCount: 67,
    tags: ["yoga", "fitness", "non-slip", "premium"],
    specifications: {
      Thickness: "6mm",
      Material: "TPE (Eco-friendly)",
      Size: "72 x 24 inches",
      Features: "Non-slip, Lightweight, Carrying Strap",
    },
    badge: "Eco-Friendly",
  },
  {
    id: "20",
    name: "Camping Tent 4-Person",
    description: "Waterproof 4-person camping tent with easy setup and ventilation system.",
    price: 8999,
    originalPrice: 12999,
    image: "/camping-tent-4-person-waterproof.jpg",
    images: ["/camping-tent-4-person-waterproof.jpg"],
    category: "Sports",
    subcategory: "Outdoor",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    stockCount: 23,
    tags: ["camping", "tent", "waterproof", "outdoor"],
    specifications: {
      Capacity: "4 persons",
      Setup: "Easy 10-minute setup",
      Material: "Waterproof Polyester",
      Features: "Ventilation Windows, Rainfly Included",
    },
  },
]

export const categories = [
  "All Categories",
  "Electronics",
  "Furniture",
  "Fashion",
  "Home & Garden",
  "Sports",
  "Books",
  "Beauty",
]

export const subcategories: Record<string, string[]> = {
  Electronics: ["Audio", "Wearables", "Cameras", "Gaming", "Computers", "Mobile", "Mobile Accessories"],
  Furniture: ["Office", "Living Room", "Bedroom", "Dining"],
  Fashion: ["Men", "Women", "Kids", "Accessories"],
  "Home & Garden": ["Kitchen", "Bathroom", "Garden", "Decor"],
  Sports: ["Fitness", "Outdoor", "Team Sports", "Water Sports"],
  Books: ["Fiction", "Non-Fiction", "Educational", "Children"],
  Beauty: ["Skincare", "Makeup", "Hair Care", "Fragrance"],
}

export const getRecommendedProducts = (productId: string, category?: string): Product[] => {
  const currentProduct = mockProducts.find((p) => p.id === productId)
  if (!currentProduct) return []

  // Define recommendation rules
  const recommendations: Record<string, string[]> = {
    "7": ["8", "9"], // iPhone -> Screen protector, Case
    "10": ["8", "9"], // Samsung -> Screen protector, Case (compatible accessories)
    "1": ["6"], // Headphones -> Speaker
    "2": ["19"], // Fitness Watch -> Yoga Mat
    "15": ["16"], // Coffee Maker -> Kitchen items
    "19": ["20"], // Yoga Mat -> Outdoor/Camping
  }

  const directRecommendations = recommendations[productId] || []
  const recommendedProducts = directRecommendations
    .map((id) => mockProducts.find((p) => p.id === id))
    .filter(Boolean) as Product[]

  // If no direct recommendations, get products from same category
  if (recommendedProducts.length === 0 && currentProduct) {
    const sameCategory = mockProducts
      .filter((p) => p.id !== productId && p.category === currentProduct.category)
      .slice(0, 3)
    recommendedProducts.push(...sameCategory)
  }

  return recommendedProducts.slice(0, 4)
}

export const getSearchSuggestions = (query: string): { products: Product[]; suggestions: string[] } => {
  const lowerQuery = query.toLowerCase()

  const matchingProducts = mockProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        product.category.toLowerCase().includes(lowerQuery),
    )
    .slice(0, 5)

  const suggestions = [
    ...new Set([
      ...mockProducts.flatMap((p) => p.tags),
      ...categories.slice(1), // Exclude "All Categories"
    ]),
  ]
    .filter((suggestion) => suggestion.toLowerCase().includes(lowerQuery))
    .slice(0, 5)

  return { products: matchingProducts, suggestions }
}

export const products = mockProducts
