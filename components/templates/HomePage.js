import Card from "../modules/Card"

function HomePage({customers}) { 
   
  return (
    <div>
        {
            customers.map((cusomer) => <Card key={cusomer._id} customer={cusomer}/>)
        }
    </div>
  )
}

export default HomePage