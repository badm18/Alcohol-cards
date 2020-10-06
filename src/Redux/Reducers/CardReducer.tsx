import { createSlice } from '@reduxjs/toolkit';


export const Cardslice = createSlice({
    name: 'card',
    initialState: [{}],
    reducers: {
        add: (state, action) => {
            return [...state, action.payload]
        },
    },
});

export const { add } = Cardslice.actions


export const selectCard = (state: any) => state.card

export default Cardslice.reducer