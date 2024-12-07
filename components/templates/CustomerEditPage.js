'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { format } from "date-fns"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Form from "../modules/Form"

export default function CustomerEditPage({ data, id }) {
  const date = data.date ? format(new Date(data.date), "yyyy-MM-dd") : ""

  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date,
  })

  const router = useRouter()

  const saveHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    if (data.status === "success") router.push("/")
  }

  const cancelHandler = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Edit Customer</CardTitle>
        </CardHeader>
        <CardContent>
          <Form form={form} setForm={setForm} />
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={cancelHandler}>
            Cancel
          </Button>
          <Button onClick={saveHandler}>
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

