import React, { FC } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { TFormValues } from '../UI/SignUp';
import { useAppDispatch, useAppSelector } from '../../../shared/models';
import { setUser } from '../../../entities/user';
import { useNavigate } from 'react-router';




interface IUseSubmit {
    handleSubmit : UseFormHandleSubmit<TFormValues, undefined>
}

export const useRegistrationSubmit = ({handleSubmit} :IUseSubmit ) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return  handleSubmit((data) => {    
        dispatch(setUser({firstName : data.firstName, password : data.password, email : data.email}))
        navigate(-1)
    })

};

