import { UseFormHandleSubmit } from 'react-hook-form';
import { TFormValues } from '../UI/SignUp';
import { useAppDispatch } from '../../../shared/models';
import { setUser } from '../../../entities/user';




interface IUseSubmit {
    handleSubmit : UseFormHandleSubmit<TFormValues, undefined>
}

export const useRegistrationSubmit = ({handleSubmit} :IUseSubmit ) => {
    const dispatch = useAppDispatch()
    return  handleSubmit((data) => {    
        dispatch(setUser({firstName : data.firstName, password : data.password, email : data.email}))
    })

};

