import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeUser } from "./TypeUser";

interface IInitial {
    user : TypeUser | null
}

const user = sessionStorage.getItem("user")

const initialState:IInitial = {
    user : user ? JSON.parse(user) : null
}

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {
        setUser(state, action:PayloadAction<TypeUser>){
            state.user = action.payload
            sessionStorage.setItem('user', JSON.stringify(action.payload));
        }
    },

})
export const {setUser} = userSlice.actions
export default userSlice.reducer