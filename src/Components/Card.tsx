import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import '../ComponentsCss/CardsArea.css'
import { add, selectCard } from '../Redux/Reducers/CardReducer'
import { useSelector, useDispatch } from 'react-redux';

export const Cards: React.FC = () => {

    const CardInfo = useSelector(selectCard)



    return (

        <div className="cardsArea">
            {CardInfo.filter((item:any)=>item.id!==undefined).map((i: any) =>
                <Card style={{ width: '18rem', margin: '10px 0 0 15px', display: 'flex', }} >
                    <Card.Img variant="top" src={i.url} />
                    <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>{i.discription}</Card.Text>
                        <Card.Title>Примерная стоимость:{i.cost}</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card >
            )}
        </div>
    )


}