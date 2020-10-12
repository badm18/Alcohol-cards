import React, { useEffect, useState } from 'react';
import { NavBar } from '../Components/Navbar';
import { ModalCard } from '../Components/CreateCard';
import { Cards } from '../Components/Card';
import * as app from "firebase/app";
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Reducers/CardReducer';
import { Spinner } from 'react-bootstrap';





export const CardPage: React.FC = () => {

    const dispatch = useDispatch();


    const [loading, setLoad] = useState(true);


    useEffect(() => {
        //загрущка данных из сервера и передеча их в store
        app.database().ref('/cards').once('value').then((snap) => {
            snap.forEach((elem) => {
                dispatch(add(elem.val()))
            })
            setLoad(false)
        })

    }, [])

    
    return (
        <>
            <NavBar />
            <ModalCard />
            {loading === true ?
                <Spinner animation="border" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </Spinner> :
                <Cards />
            }

        </>
    );
}