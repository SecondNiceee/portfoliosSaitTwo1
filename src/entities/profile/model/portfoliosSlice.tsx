import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypePortfolio } from "./TypePortfolio";


interface IInitial{
    portfolios : TypePortfolio[]
}
const initialState:IInitial = {
    portfolios : []
}
export const portfoliosSlice = createSlice({
    name : "portfoliosSlice",
    initialState : initialState,
    reducers : {
        addPortfolio : (state, action:PayloadAction<TypePortfolio>) => {
            state.portfolios.push(action.payload)
        }
    }
})

export const {addPortfolio} = portfoliosSlice.actions;
export default portfoliosSlice.reducer;