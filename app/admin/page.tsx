"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trash2, Edit, Plus, Users, Package } from "lucide-react"
import { products, type Product } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

export default function AdminPage() {
  const { user, registeredUsers } = useAuth()
  const router = useRouter()
  const [adminProducts, setAdminProducts] = useState<Product[]>(products)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/login")
    }
  }, [user, router])

  if (!user || user.role !== "admin") {
    return null
  }

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.get("name") as string,
      price: Number(formData.get("price")),
      image: (formData.get("image") as string) || "/placeholder.svg?height=300&width=300",
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      rating: 4.5,
      reviews: 0,
      inStock: true,
    }

    const updatedProducts = [...adminProducts, newProduct]
    setAdminProducts(updatedProducts)
    localStorage.setItem("products", JSON.stringify(updatedProducts))
    setShowAddForm(false)
    setMessage("Product added successfully!")
    setTimeout(() => setMessage(""), 3000)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
  }

  const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingProduct) return

    const formData = new FormData(e.currentTarget)

    const updatedProduct: Product = {
      ...editingProduct,
      name: formData.get("name") as string,
      price: Number(formData.get("price")),
      image: formData.get("image") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
    }

    const updatedProducts = adminProducts.map((p) => (p.id === editingProduct.id ? updatedProduct : p))
    setAdminProducts(updatedProducts)
    localStorage.setItem("products", JSON.stringify(updatedProducts))
    setEditingProduct(null)
    setMessage("Product updated successfully!")
    setTimeout(() => setMessage(""), 3000)
  }

  const handleDeleteProduct = (productId: string) => {
    const updatedProducts = adminProducts.filter((p) => p.id !== productId)
    setAdminProducts(updatedProducts)
    localStorage.setItem("products", JSON.stringify(updatedProducts))
    setMessage("Product deleted successfully!")
    setTimeout(() => setMessage(""), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage products and users</p>
      </div>

      {message && (
        <Alert className="mb-6">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="products" className="space-y-6">
        <TabsList>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Product Management</h2>
            <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </div>

          {/* Add Product Form */}
          {showAddForm && (
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Product Name</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <Label htmlFor="price">Price (₹)</Label>
                      <Input id="price" name="price" type="number" required />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select name="category" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Electronics">Electronics</SelectItem>
                          <SelectItem value="Fashion">Fashion</SelectItem>
                          <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                          <SelectItem value="Sports">Sports</SelectItem>
                          <SelectItem value="Books">Books</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="image">Image URL</Label>
                      <Input id="image" name="image" placeholder="Optional" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" required />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Add Product</Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Products List */}
          <div className="grid gap-4">
            {adminProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <p className="font-medium">{formatPrice(product.price)}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditProduct(product)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDeleteProduct(product.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <h2 className="text-2xl font-semibold">User Management</h2>
          <div className="grid gap-4">
            {registeredUsers.map((registeredUser) => (
              <Card key={registeredUser.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={registeredUser.avatar || "/placeholder.svg"}
                        alt={registeredUser.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{registeredUser.name}</h3>
                        <p className="text-sm text-muted-foreground">{registeredUser.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={registeredUser.role === "admin" ? "default" : "secondary"}>
                        {registeredUser.role}
                      </Badge>
                      {registeredUser.isFirstAdmin && <Badge variant="outline">First Admin</Badge>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Edit Product</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateProduct} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-name">Product Name</Label>
                    <Input id="edit-name" name="name" defaultValue={editingProduct.name} required />
                  </div>
                  <div>
                    <Label htmlFor="edit-price">Price (₹)</Label>
                    <Input id="edit-price" name="price" type="number" defaultValue={editingProduct.price} required />
                  </div>
                  <div>
                    <Label htmlFor="edit-category">Category</Label>
                    <Input id="edit-category" name="category" defaultValue={editingProduct.category} required />
                  </div>
                  <div>
                    <Label htmlFor="edit-image">Image URL</Label>
                    <Input id="edit-image" name="image" defaultValue={editingProduct.image} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    name="description"
                    defaultValue={editingProduct.description}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Update Product</Button>
                  <Button type="button" variant="outline" onClick={() => setEditingProduct(null)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
