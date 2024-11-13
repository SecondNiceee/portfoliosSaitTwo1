import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypePortfolio } from "./TypePortfolio";

let id = 1; // id для имитации сервера

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
        addPortfolio : (state, action:PayloadAction<Omit<TypePortfolio, "id">>) => {
            state.portfolios.push({...action.payload, id : id})
            id++;
        },
        changePortfolio : (state , action : PayloadAction<{id : number, portfolio : Omit<TypePortfolio, "id">}>) => {
            state.portfolios = state.portfolios.map( (e) => {
                if (e.id === action.payload.id){
                    return {...action.payload.portfolio, id : action.payload.id}
                }
                return e
            } )
        },
        deletePortfolio : (state, action : PayloadAction<{id:number}>) => {
            state.portfolios = state.portfolios.filter((e,i) => {
                return e.id !== action.payload.id
            })
        }
    }
})

export const {addPortfolio, changePortfolio, deletePortfolio} = portfoliosSlice.actions;
export default portfoliosSlice.reducer;