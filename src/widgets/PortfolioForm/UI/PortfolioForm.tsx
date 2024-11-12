
import {  useForm } from 'react-hook-form';
import { TypePortfolio } from '../../../entities/profile/model/TypePortfolio';
import Textarea from '../../../shared/ui/Textarea/Textarea';
import { FC, useState } from 'react';
import "./styles.scss"
import TextInput from '../../../shared/ui/TextInput/TextInput';

import Submit from '../../../shared/ui/Sumbit/Submit';
import { FileInput } from '../../../shared/ui/FileInput';
import { ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ControllerComponent from './ControllerComponent';
import CancelButton from './CancelButton';

export type TypePortfolioWithoutPhotos = Omit<TypePortfolio, 'photos' | "id">;  // Мы будет проверять все кроме фоток, у них будет личная и совсем дургая проверка 


interface IPortfolioForm{
    portfolio : Omit<TypePortfolio , "id">,
    submitFunction : (data:Omit<TypePortfolio , "id">) => void,
    submitText : string,
    zodSchema : ZodType<TypePortfolioWithoutPhotos>,
    cancelButton? : boolean,
}




export const PortfolioForm:FC<IPortfolioForm> = ({portfolio , submitFunction, submitText, zodSchema, cancelButton }) => {
    const {
        register,
        formState : {errors},
        control,
        handleSubmit,
    } = useForm<TypePortfolioWithoutPhotos>(
        {defaultValues :  portfolio, resolver : zodResolver(zodSchema)})

    const [fileError , setFileError] = useState<null | {message : string} >(null)

    const [files, setFiles] = useState<File[]>(portfolio.photos)

    const onSubmit = handleSubmit((data) => {
        const dataWithPhotos = {...data, photos : files}
        if (!files.length){
            setFileError({message : "Upload at least one file."})
        }
        else{
            
            submitFunction(dataWithPhotos)
        }
    })

    return (
        <form onSubmit={onSubmit} className='form' action="">
            <div className="form-wrapper">

                <TextInput error={errors.title} name='title' register={register} type='text' title='Portfolio title' maxLength={20} />

                <Textarea maxLength={700} control={control} error={errors.description} name='description' register={register} title='Portfolio description'  />

                <FileInput error={fileError} setError={setFileError} title='Upload ur files (max 3).' setFiles={setFiles} files={files} maxLength={3} />

                <ControllerComponent control={control} name={"likes"} />
                
                <ControllerComponent control={control} name='views' />


            </div>

            <Submit value={submitText}  />
            {cancelButton && <CancelButton />}
        </form>
    );
};
