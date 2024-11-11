import { TLoginFormValues } from "../UI/SignIn";
import { TLoginValues } from "../model/types";


export const loginFields:TLoginValues<TLoginFormValues>[] = [
    {
        error : "firstName",
        name : "firstName",
        type : "text"
    },
    {
        error : "email",
        name : "email",
        type : "email"
    },
    {
        error : "password",
        name : "password",
        type : "password"
    },

] 