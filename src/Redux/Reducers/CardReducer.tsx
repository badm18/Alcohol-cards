import { createSlice } from '@reduxjs/toolkit';
import app from 'firebase/app'
import 'firebase/database'
import loadedCards from '../../App'






export const Cardslice = createSlice({
    name: 'card',
    initialState: [{}],
    reducers: {
        add: (state, action) => {
            return [...state, action.payload]
        },
        addStar: (state: any, action) => {
            state[state.findIndex((i: any) => i.id === action.payload.id)].stars = action.payload.value
        },
        loaded: (state, action) => {
            state = action.payload
        }
    },
});

export const { add, addStar,loaded } = Cardslice.actions


export const selectCard = (state: any) => state.card

export default Cardslice.reducer