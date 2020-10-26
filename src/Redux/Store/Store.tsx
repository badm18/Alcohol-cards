import { configureStore } from '@reduxjs/toolkit';
import CardReducer from '../Reducers/CardReducer'
import SortReducer from '../Reducers/SortReducer'


export default configureStore({
    reducer:{
        card:CardReducer,
        sort:SortReducer
    }
})