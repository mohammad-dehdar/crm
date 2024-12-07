'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CustomerCard({ customer }) {
  const router = useRouter()

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, { method: "DELETE" })
    const data = await res.json()
    console.log(data)
    router.refresh()
  }

  return (
    <Card className="transition-all duration-300 mb-4 ">
      <CardContent className="flex justify-between items-center py-4 px-2">
        <div className="flex items-center gap-6">
          <p className="text-xl capitalize">
            {customer.name} {customer.lastName}
          </p>
          <p className="border p-1 rounded-md">
            {customer.email}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="destructive"
            size="sm"
            onClick={deleteHandler}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            size="sm"
            asChild
          >
            <Link href={`/edit/${customer._id}`}>Edit</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <Link href={`/customer/${customer._id}`}>Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

