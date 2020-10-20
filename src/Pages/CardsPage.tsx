import React, { useEffect, useState } from 'react';
import { NavBar } from '../Components/Navbar';
import { ModalCard } from '../Components/CreateCard';
import { Cards } from '../Components/Card';
import * as app from "firebase/app";
import { useDispatch, useSelector } from 'react-redux';
import { add, selectCard } from '../Redux/Reducers/CardReducer';
import { Spinner } from 'react-bootstrap';
import { CardInfo } from '../Interfaces/Interfaces';





export const CardPage: React.FC = () => {
    // const CardInfo = useSelector(selectCard)
    const dispatch = useDispatch();


    const [loading, setLoad] = useState(true);
    const [cards,setCards]=useState<CardInfo[]>([])

    useEffect(() => {
        //загрущка данных из сервера и передеча их в store
        app.database().ref('/cards').once('value').then((snap) => {
            snap.forEach((elem) => {
                dispatch(add(elem.val()));
                setCards(prev=>[...prev,elem.val()])
            })
            setLoad(false)
        })

    }, [])

    
    return (
        <>
            <ModalCard />
            {loading === true ?
                <Spinner animation="border" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </Spinner> :
                <Cards CardInfo={cards} />
            }

        </>
    );
}