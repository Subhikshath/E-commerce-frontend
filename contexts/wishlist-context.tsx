"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Product } from "@/lib/products"

interface WishlistContextType {
  items: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    // Load wishlist from localStorage on mount
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      setItems(JSON.parse(storedWishlist))
    }
  }, [])

  useEffect(() => {
    // Save wishlist to localStorage whenever items change
    localStorage.setItem("wishlist", JSON.stringify(items))
  }, [items])

  const addToWishlist = (product: Product) => {
    setItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id)
      if (!exists) {
        return [...prevItems, product]
      }
      return prevItems
    })
  }

  const removeFromWishlist = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const isInWishlist = (productId: string) => {
    return items.some((item) => item.id === productId)
  }

  const clearWishlist = () => {
    setItems([])
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
