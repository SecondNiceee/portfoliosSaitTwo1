
import { Controller, useForm } from 'react-hook-form';
import { TypePortfolio } from '../../../entities/profile/model/TypePortfolio';
import Textarea from '../../../shared/ui/Textarea/Textarea';
import { FC, useState } from 'react';
import "./styles.scss"
import TextInput from '../../../shared/ui/TextInput/TextInput';

import Submit from '../../../shared/ui/Sumbit/Submit';
import { FileInput } from '../../../shared/ui/FileInput';
import NumberInput from '../../../shared/ui/NumberInput/NumberInput';

interface IPortfolioForm{
    portfolio : TypePortfolio,
    submitFunction : (data:TypePortfolio) => void,
    submitText : string
}

type TypePortfolioWithoutPhotos = Omit<TypePortfolio, 'photos'>;



export const PortfolioForm:FC<IPortfolioForm> = ({portfolio , submitFunction, submitText }) => {
    const {
        register,
        formState : {errors},
        control,
        handleSubmit,
        getValues
    } = useForm<TypePortfolioWithoutPhotos>(
        {defaultValues :  portfolio})

    const [fileError , setFileError] = useState<boolean>(false)

    const [files, setFiles] = useState<File[]>(portfolio.photos)

    const onSubmit = handleSubmit((data) => {
        const dataWithPhotos:TypePortfolio = {...data, photos : files}
        submitFunction(dataWithPhotos)
    })
    
    return (
        <form onSubmit={onSubmit} className='form' action="">
            <div className="form-wrapper">

                <TextInput error={errors.title} name='title' register={register} type='text' title='Portfolio title' maxLength={20} />

                <Textarea maxLength={700} control={control} error={errors.description} name='description' register={register} title='Portfolio description'  />

                <FileInput title='Upload ur files (max 3).' setFiles={setFiles} files={files} maxLength={3} />

                <Controller name='likes' control={control} render={({field}) => {
                    const {name, value, onChange} = field
                    return (
                        <NumberInput title='likes' name={name} onChange={onChange} value={value} />
                    )
                }} />

                <Controller name='views' control={control} render={({field}) => {
                    const {name, value, onChange} = field
                    return (
                        <NumberInput title='views' name={name} onChange={onChange} value={value} />
                    )
                }} />

            </div>

            <Submit value={submitText}  />
        </form>
    );
};
