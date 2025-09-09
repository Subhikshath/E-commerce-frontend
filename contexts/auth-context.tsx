"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "user" | "admin"
  isFirstAdmin?: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
  registeredUsers: User[]
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([])
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedUsers = localStorage.getItem("registeredUsers")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers))
    } else {
      const firstAdmin: User = {
        id: "admin-1",
        email: "admin@ecommerce.com",
        name: "System Admin",
        role: "admin",
        isFirstAdmin: true,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
      }
      const initialUsers = [firstAdmin]
      setRegisteredUsers(initialUsers)
      localStorage.setItem("registeredUsers", JSON.stringify(initialUsers))
    }

    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const existingUser = registeredUsers.find((u) => u.email === email)

    if (!existingUser) {
      setIsLoading(false)
      return { success: false, error: "Invalid credentials" }
    }

    if (password.length < 6) {
      setIsLoading(false)
      return { success: false, error: "Invalid credentials" }
    }

    setUser(existingUser)
    localStorage.setItem("user", JSON.stringify(existingUser))
    setIsLoading(false)
    return { success: true }
  }

  const signup = async (
    email: string,
    password: string,
    name: string,
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const existingUser = registeredUsers.find((u) => u.email === email)
    if (existingUser) {
      setIsLoading(false)
      return { success: false, error: "User already exists with this email" }
    }

    if (!email || password.length < 6 || !name) {
      setIsLoading(false)
      return { success: false, error: "Please fill all fields with valid data" }
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: "user",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    }

    const updatedUsers = [...registeredUsers, newUser]
    setRegisteredUsers(updatedUsers)
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers))

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    setIsLoading(false)
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading, registeredUsers }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
