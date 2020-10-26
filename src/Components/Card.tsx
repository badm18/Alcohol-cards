import React, { useState } from 'react'
import CSS from 'csstype';
import Card from 'react-bootstrap/Card'
import '../ComponentsCss/CardsArea.css'
import { add, addStar, addToFavorite, selectCard } from '../Redux/Reducers/CardReducer'
import { useSelector, useDispatch } from 'react-redux';
import ReactStars from 'react-stars'
import app from 'firebase/app'
import { CardInfo } from '../Interfaces/Interfaces'
import { DetailedInfo } from './ModalInfo'
import { sortType } from '../Redux/Reducers/SortReducer'

type CardProp = {
    CardInfo: CardInfo[]
}

let heartStyle: CSS.Properties = {
    fill: 'none'
}



export const Cards: React.FC<CardProp> = ({ CardInfo }) => {

    const sort = useSelector(sortType)
    const dispatch = useDispatch();



    const [heart, setHeart] = useState(heartStyle)



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


    //добавление в избранное 
    const addToFavorites = (id: any, favorites: Boolean) => {
        console.log(id)
        app.database().ref('/cards/' + id).update({
            favorites: !favorites
        }).then(() => {
            dispatch(addToFavorite({
                id: id,
                favorites: !favorites
            }))
            setHeart({ fill: 'red' })
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



            { CardInfo.map((i: CardInfo) =>




                <Card style={{ width: '18rem', margin: '10px 0 0 15px', display: 'flex', }} >
                    <Card.Img variant="top" src={i.url} />
                    <ReactStars count={5} size={24} value={i.stars} color2={'#ffd700'} onChange={(e) => changeStar(e, i.id)} />
                    <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text >{textCut(i.discription)}</Card.Text>
                        <Card.Title>Примерная стоимость:{i.cost}</Card.Title>


                        <div className="bottomCard">
                            <DetailedInfo cardInfo={i} />
                            <div className="like">
                                <svg onClick={() => addToFavorites(i.id, i.favorites)} width="20" height="20" viewBox="0 0 350 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id={i.favorites ? 'heartIconTrue' : 'heartIcon'} d="M205 306L176 337L102 257L74 225L44 188L29 164L11 123L5 89L11 56L29 31L44 17L74 4H115L148 23L176 56L205 23L240 4H278L316 23L339 56L345 89L334 138L299 198L249 257L205 306Z" fill="none" stroke="black" stroke-width="8" />
                                </svg>
                            </div>

                        </div>

                    </Card.Body>
                </Card >
            )}






        </div>
    )


}