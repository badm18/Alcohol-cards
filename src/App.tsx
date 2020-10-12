import React from 'react';
import './App.css';
import * as app from "firebase/app";
import { CardPage } from './Pages/CardsPage';
import { BrowserRouter, Route } from 'react-router-dom';

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


  return (
    <BrowserRouter>
      <Route exact path="/" component={CardPage} />
    </BrowserRouter>

  );
}

export default App;
