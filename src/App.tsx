import React, { useEffect } from 'react';
import './App.css';
import * as app from "firebase/app";
import { CardPage } from './Pages/CardsPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { requestPage } from './Pages/requestPage';
import { NavBar } from './Components/Navbar';
import { FavoritesPage } from './Pages/FavoritesPage';
import { add, loaded } from './Redux/Reducers/CardReducer';
import { useDispatch } from 'react-redux';

var firebaseConfig = {
  apiKey: "AIzaSyBFKCNdgeqg4FyT4cU4fQ_9ZiZu7gXXaYQ",
  authDomain: "alcohol-cards.firebaseapp.com",
  databaseURL: "https://alcohol-cards.firebaseio.com",
  projectId: "alcohol-cards",
  storageBucket: "alcohol-cards.appspot.com",
  messagingSenderId: "1018600538986",
  appId: "1:1018600538986:web:19a534336490d91ef01b13"
};

app.initializeApp(firebaseConfig);


const App: React.FC = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    //загрузка данных из сервера и передеча их в store
    app.database().ref('/cards').once('value').then((snap) => {
        snap.forEach((elem) => {
            dispatch(add(elem.val()));
          
        })
     dispatch(loaded())
    })

}, [])

  return (
    <>
   
      <BrowserRouter>
      <NavBar />
        <Route exact path="/" component={CardPage} />
        <Route exact path={"/request/:name"} component={requestPage} />
        <Route exact path={"/favorites"} component={FavoritesPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
