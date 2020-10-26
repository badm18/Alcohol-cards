import { createSlice } from '@reduxjs/toolkit';


export const SortTypeSlice = createSlice({
    name: 'sort',
    initialState: 'default',
    reducers: {
        changeType: (state, action) => {
            return state = action.payload
        }
    }
})


export const { changeType } = SortTypeSlice.actions
export const sortType = (state: any) => state.sort

export default SortTypeSlice.reducer