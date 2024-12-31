'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Modal from "./Modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

function CustomerCard({ customer }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, { method: "DELETE" })
    const data = await res.json()
    console.log(data)
    router.refresh()
    setIsModalOpen(false)
  }

  return (
    <>
      <Card className="card transition-all duration-300 mb-4">
        <CardContent className="card-content flex justify-between items-center py-4 px-2">
          <div className="flex items-center gap-6">
            <CardTitle>
              {customer.name} {customer.lastName}
            </CardTitle>
            <CardDescription className="border p-1 rounded-md max-sm:hidden">
              {customer.email}
            </CardDescription>
          </div>
          <div className="flex gap-2 items-center">
            <Button
              className="bg-red-400 hover:bg-red-500"
              onClick={() => setIsModalOpen(true)}
            >
              Delete
            </Button>
            <Button
              className="bg-orange-400 hover:bg-orange-500"
              onClick={() => router.push(`/edit/${customer._id}`)}
            >
              Edit
            </Button>
            <Button
              className="btn btn-outline btn-small"
              onClick={() => router.push(`/customer/${customer._id}`)}
            >
              Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} deleteHandler={deleteHandler} />
      )}
    </>
  )
}


export default CustomerCard;