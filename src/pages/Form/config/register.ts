import { TFormValues } from "../UI/SignUp";
import { TRegisterValues } from "../model/types";

export const registerFields:TRegisterValues<TFormValues>[] = [
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
    {
        error : "confirmPassword",
        name : "confirmPassword",
        type : "password"
    },

] 