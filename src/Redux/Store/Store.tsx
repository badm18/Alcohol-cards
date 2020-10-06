import { configureStore } from '@reduxjs/toolkit';
import CardReducer from '../Reducers/CardReducer'


export default configureStore({
    reducer:{
        card:CardReducer
    }
})