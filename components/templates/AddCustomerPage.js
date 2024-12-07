'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Form from "../modules/Form"

export default function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  })

  const router = useRouter()

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    console.log(data)
    if (data.status === "success") router.push("/")
  }

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    })
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Add New Customer</CardTitle>
        </CardHeader>
        <CardContent>
          <Form form={form} setForm={setForm} />
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={cancelHandler}>
            Cancel
          </Button>
          <Button onClick={saveHandler}>
            Save Customer
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

