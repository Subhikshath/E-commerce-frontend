"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star, Search, User, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { mockProducts } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

const featuredProducts = mockProducts.slice(0, 8) // Show 8 products instead of 4

const categories = [
  { name: "Electronics", image: "/electronics-category.png", count: "2,341 items" },
  { name: "Fashion", image: "/fashion-category.png", count: "1,892 items" },
  { name: "Home & Garden", image: "/home-garden-category.png", count: "3,456 items" },
  { name: "Sports", image: "/sports-collage.png", count: "987 items" },
]

export default function HomePage() {
  const { user, logout } = useAuth()
  const { getTotalItems, addItem } = useCart()
  const { items: wishlistItems, addItem: addToWishlist } = useWishlist()

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  const handleAddToWishlist = (product: any) => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      rating: product.rating,
      reviews: product.reviews,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-smooth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gradient hover-scale focus-ring rounded-lg px-2 py-1">
                ShopHub
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 transition-smooth" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background focus-ring transition-smooth hover:border-ring/50"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="hidden md:flex btn-animate focus-ring">
                  Contact
                </Button>
              </Link>
              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="hidden md:flex relative btn-animate focus-ring">
                  <Heart className="h-5 w-5" />
                  {wishlistItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse">
                      {wishlistItems.length}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative btn-animate focus-ring">
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </Link>
              {user ? (
                <div className="flex items-center space-x-2">
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="hidden md:flex btn-animate focus-ring">
                      Dashboard
                    </Button>
                  </Link>
                  <span className="hidden md:inline text-sm fade-in">Hi, {user.name}</span>
                  <Button variant="ghost" size="sm" onClick={logout} className="btn-animate focus-ring">
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/login">
                  <Button variant="ghost" size="icon" className="btn-animate focus-ring">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              )}
              <Button variant="ghost" size="icon" className="md:hidden btn-animate focus-ring">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight slide-up">
                Discover Amazing Products at
                <span className="text-gradient"> Unbeatable Prices</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty fade-in" style={{ animationDelay: "0.2s" }}>
                Shop from thousands of premium products with fast shipping, easy returns, and exceptional customer
                service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
                <Link href="/products">
                  <Button size="lg" className="text-lg px-8 btn-animate hover-lift focus-ring">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 bg-transparent btn-animate hover-lift focus-ring"
                  >
                    View Categories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative fade-in" style={{ animationDelay: "0.3s" }}>
              <Image
                src="/modern-ecommerce-hero-shopping.jpg"
                alt="Shopping Hero"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl hover-lift transition-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/products?category=${encodeURIComponent(category.name)}`}>
                <Card
                  className="group cursor-pointer card-hover focus-ring"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={200}
                        height={200}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 transition-smooth group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Handpicked favorites just for you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group cursor-pointer card-hover focus-ring fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </Link>
                    {product.badge && (
                      <Badge
                        className="absolute top-3 left-3 transition-smooth group-hover:scale-105"
                        variant="secondary"
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 btn-animate focus-ring"
                      onClick={(e) => {
                        e.preventDefault()
                        handleAddToWishlist(product)
                      }}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-2 text-balance group-hover:text-primary transition-smooth">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        <span className="ml-1 text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      className="w-full btn-animate focus-ring"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault()
                        handleAddToCart(product)
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="btn-animate hover-lift focus-ring bg-transparent">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">Get the latest deals and product updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus-ring transition-smooth"
            />
            <Button variant="secondary" size="lg" className="btn-animate focus-ring">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
              <p className="text-muted-foreground">
                Your trusted online shopping destination with quality products and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-smooth">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-smooth">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-smooth">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-smooth">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/products?category=Electronics" className="hover:text-foreground transition-smooth">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=Fashion" className="hover:text-foreground transition-smooth">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=Home%20%26%20Garden"
                    className="hover:text-foreground transition-smooth"
                  >
                    Home & Garden
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=Sports" className="hover:text-foreground transition-smooth">
                    Sports
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-smooth">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-smooth">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-smooth">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-smooth">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
