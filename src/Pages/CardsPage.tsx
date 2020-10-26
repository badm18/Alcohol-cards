import React, { useEffect, useState } from 'react';
import { NavBar } from '../Components/Navbar';
import { ModalCard } from '../Components/CreateCard';
import { Cards } from '../Components/Card';
import * as app from "firebase/app";
import { useDispatch, useSelector } from 'react-redux';
import { add, selectCard } from '../Redux/Reducers/CardReducer';
import { Spinner } from 'react-bootstrap';
import { CardInfo } from '../Interfaces/Interfaces';
import { Selector } from '../Components/CardPageSelector';
import { sortType } from '../Redux/Reducers/SortReducer';



export const CardPage: React.FC = () => {

    const dispatch = useDispatch();
    const sort = useSelector(sortType)
    const storeCards=useSelector(selectCard)

    const [loading, setLoad] = useState(false);
    const [cards, setCards] = useState<CardInfo[]>([])



    // useEffect(() => {
    //     //загрузка данных из сервера и передеча их в store
    //     app.database().ref('/cards').once('value').then((snap) => {
    //         snap.forEach((elem) => {
    //             dispatch(add(elem.val()));
    //             setCards(prev => [...prev, elem.val()])
    //         })
    //         setLoad(false)
    //     })

    // }, [])


    return (
        <>


            <div className="topOfPage">
                <Selector />

                <ModalCard />
            </div>




            {storeCards[0].loaded === true ?
                <Spinner animation="border" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </Spinner> :
                sort === 'default' ?
                    <Cards CardInfo={storeCards.filter((i:any)=>i.id!=undefined)} /> :
                    <Cards CardInfo={storeCards.filter((i: any) => i.type === sort)} />
            }

        </>
    );
}