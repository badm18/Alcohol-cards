import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Cards } from '../Components/Card'
import { selectCard } from '../Redux/Reducers/CardReducer'



export const FavoritesPage:React.FC=()=>{

const favoriteCards=useSelector(selectCard)

const [cards,setCards]=useState([])

useEffect(()=>{
    setCards([])
    setCards(favoriteCards.filter((i:any)=>i.favorites===true))
    setCards([])
},[])

    return(
        <>
     {console.log(favoriteCards)}
     <Cards CardInfo={favoriteCards.filter((i:any)=>i.favorites===true)}/>
     
        </>
    )
}