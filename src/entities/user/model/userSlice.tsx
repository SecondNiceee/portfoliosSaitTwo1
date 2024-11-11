import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeUser } from "./TypeUser";

interface IInitial {
    user : TypeUser | null
}
const initialState:IInitial = {
    user : null
}

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {
        setUser(state, action:PayloadAction<TypeUser>){
            state.user = {
                firstName : action.payload.firstName, 
                email : action.payload.email,
                password : action.payload.password
            }
        }
    },

})
export const {setUser} = userSlice.actions
export default userSlice.reducer