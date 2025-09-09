"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, Truck, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Order {
  id: string
  date: string
  status: string
  total: number
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    image: string
  }>
  shipping: {
    firstName: string
    lastName: string
    email: string
    address: string
    city: string
    state: string
    zipCode: string
  }
}

export default function OrderConfirmationPage() {
  const params = useParams()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const foundOrder = orders.find((o: Order) => o.id === params.orderId)
    setOrder(foundOrder || null)
  }, [params.orderId])

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const estimatedDelivery = new Date()
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-primary">
              ShopHub
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Order Details
                  <Badge variant="secondary">Processing</Badge>
                </CardTitle>
                <CardDescription>Order #{order.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-1">Order Date</p>
                    <p className="text-muted-foreground">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Estimated Delivery</p>
                    <p className="text-muted-foreground">{estimatedDelivery.toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Total Amount</p>
                    <p className="text-muted-foreground">${order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Payment Method</p>
                    <p className="text-muted-foreground">Credit Card</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Items Ordered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity} × ${item.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <p className="font-medium">
                    {order.shipping.firstName} {order.shipping.lastName}
                  </p>
                  <p className="text-muted-foreground">{order.shipping.address}</p>
                  <p className="text-muted-foreground">
                    {order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Status & Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Order Status */}
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Order Confirmed</p>
                      <p className="text-xs text-muted-foreground">{new Date(order.date).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                      <Package className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Processing</p>
                      <p className="text-xs text-muted-foreground">Preparing your order</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 opacity-50">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                      <Truck className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Shipped</p>
                      <p className="text-xs text-muted-foreground">On the way to you</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 opacity-50">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Delivered</p>
                      <p className="text-xs text-muted-foreground">Package delivered</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    Track Your Order
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    Continue Shopping
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-between bg-transparent">
                  Download Receipt
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any questions about your order, we're here to help.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
