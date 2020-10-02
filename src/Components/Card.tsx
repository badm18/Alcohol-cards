import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


export const Cards: React.FC = () => {


    return (
        
        <Card style={{ width: '18rem', margin:'10px 0 0 10px' }} >
            <Card.Img variant="top" src="https://99px.ru/sstorage/53/2019/03/tmb_254669_381281.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )


}