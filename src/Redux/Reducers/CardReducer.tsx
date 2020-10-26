import { createSlice } from '@reduxjs/toolkit';
import 'firebase/database'








export const Cardslice = createSlice({
    name: 'card',
    initialState: [{ loaded: true }],
    reducers: {
        add: (state, action) => {
            if (state[state.findIndex((i: any) => i.id === action.payload.id)] !== action.payload) {
                return [...state, action.payload]
            }
        },
        addStar: (state: any, action) => {
            state[state.findIndex((i: any) => i.id === action.payload.id)].stars = action.payload.value
        },
        loaded: (state) => {
            state[0].loaded === false ?
                state[0].loaded = true :
                state[0].loaded = false
        },
        addToFavorite: (state: any, action) => {
            state[state.findIndex((i: any) => i.id === action.payload.id)].favorites = action.payload.favorites;
            
        },
    },
});



export const { add, addStar, loaded, addToFavorite } = Cardslice.actions


export const selectCard = (state: any) => state.card



export default Cardslice.reducer
