import React, { useState } from 'react';
import Submit from '../../../shared/ui/Sumbit/Submit';
import TextInput from '../../../shared/ui/TextInput/TextInput';
import { loginFields, registerFields } from '../config';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserLoginSchema } from '../model/validation';
import { useLoginSubmit } from '../model';


export type TLoginFormValues = {
    firstName : string,
    email: string;
    password: string;
  };
const SignIn = () => {


    const [error, setError] = useState<boolean>(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm<TLoginFormValues>({
        resolver: zodResolver(UserLoginSchema),
      });
    
      const onSubmit = useLoginSubmit({handleSubmit, setError})

      
    return (
        <form className="form" onSubmit={onSubmit}>
        <div className="form-wrapper">
          {loginFields.map((e, i) => {
            return (
              <TextInput
                maxLength={e.name === "firstName" ? 15 : undefined}
                error={errors[e.error]}
                name={e.name}
                register={register}
                type={e.type}
              />
            );
          })}
        </div>
        {error && <p className={"errorText"}>User not founded!!</p>}
        <Submit value="Sign in!" className="submit" />
  
      </form>
    );
};

export default SignIn;