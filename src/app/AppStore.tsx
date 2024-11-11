import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../entities/user/model/userSlice"
import portfoliosSlice  from "../entities/profile/model/portfoliosSlice";

export const store = configureStore({
    reducer : {
        userSlice : userSlice,
        portfoliosSlice : portfoliosSlice 
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck : false})
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']