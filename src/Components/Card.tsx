import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import '../ComponentsCss/CardsArea.css'
import { add, addStar, selectCard } from '../Redux/Reducers/CardReducer'
import { useSelector, useDispatch } from 'react-redux';
import ReactStars from 'react-stars'
import app from 'firebase/app'


export const Cards: React.FC = () => {

    const CardInfo = useSelector(selectCard)
    const dispatch = useDispatch();


    const changeStar = (e: number, id: string) => {
        app.database().ref('/cards/' + id).update({
            stars: e
        }).then(() => {
            dispatch(addStar({
                value: e,
                id: id
            }
            ))
        })
    }

    //сокращение описания 
    const textCut = (str: string) => {
        if (str.length > 150) {
            return str.substr(0, 150) + '...'
        }
        return str
    }


    return (

        <div className="cardsArea">
            {CardInfo.filter((item: any) => item.id !== undefined).map((i: any) =>

                <Card style={{ width: '18rem', margin: '10px 0 0 15px', display: 'flex', }} >
                    <Card.Img variant="top" src={i.url} />
                    <ReactStars count={5} size={24} value={i.stars} color2={'#ffd700'} onChange={(e) => changeStar(e, i.id)} />
                    <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text >{textCut(i.discription)}</Card.Text>
                        <Card.Title>Примерная стоимость:{i.cost}</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card >
            )}
        </div>
    )


}