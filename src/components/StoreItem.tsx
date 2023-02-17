import {Card, Button} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"


type StoreItemProps ={
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}:
 StoreItemProps){
    const quantity = 1
    return(
        <Card className="h-100">
            <Card.Img 
              variant="top"
              src={imgUrl}
              height="200px"
              style={{objectFit: "cover"}}/>
         <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" variant="primary">+ Add To Cart</Button>
                ) : <div className="d-flex flex-column align-items-center"
                        style={{gap: ".5rem" }}>  
                         <div className="d-flex justify-content-center align-items-center"
                        style={{gap: ".5rem" }}>
                            <Button>-</Button>
                            <span className="fs-4">{quantity}</span>
                            <Button>+</Button>
                        </div>
                        <Button variant="danger">Remove</Button>
                     </div>
                    }
            </div>
        </Card.Body>     
        </Card>
    )
}