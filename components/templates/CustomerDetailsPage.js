import Link from 'next/link'
import { format } from 'date-fns'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CustomerDetails({ data, deleteHandler }) {
  return (
    <div className="text-foreground p-4 flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <DetailItem label="Name" value={`${data.name} ${data.lastName}`} />
            <DetailItem label="Email" value={data.email} />
            <DetailItem label="Phone" value={data.phone} />
            <DetailItem label="Postal Code" value={data.postalCode} />
            <DetailItem label="Address" value={data.address} />
            <DetailItem label="Date" value={format(new Date(data.date), 'yyyy-MM-dd')} />
          </div>
          
          <Separator className="my-4" />
          
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <div className="space-y-2">
            {data.products.map((product, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{product.name}</span>
                <span>{product.qty} x ${product.price}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="destructive" onClick={deleteHandler}>
            Delete
          </Button>
          <Button variant="secondary" asChild>
            <Link href={`/edit/${data._id}`}>Edit</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function DetailItem({ label, value }) {
  return (
    <div className="text-sm">
      <span className="font-medium text-muted-foreground">{label}: </span>
      <span>{value}</span>
    </div>
  )
}

