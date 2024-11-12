import { UseFormHandleSubmit } from "react-hook-form";
import { TLoginFormValues } from "../UI/SignIn";
import { useAppDispatch } from "../../../shared/models";
import { setUser } from "../../../entities/user";
import { SetStateAction } from "react";

interface IUserLoginSubmit {
    handleSubmit : UseFormHandleSubmit<TLoginFormValues, undefined>,
    setError : React.Dispatch<SetStateAction<boolean>>
}

export const useLoginSubmit = ({handleSubmit, setError} :IUserLoginSubmit ) => {

    const dispatch = useAppDispatch()
    return  handleSubmit((data) => {    
        if (data.password !== "123456" || data.email !== "col@gmail.com"){
            setError(true)
        }
        else{
            dispatch(setUser({firstName : data.firstName, password : data.password, email : data.email}))
        }
    })

};
