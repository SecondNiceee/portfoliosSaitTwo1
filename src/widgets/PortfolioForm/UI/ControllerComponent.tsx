import React, { FC } from 'react';
import { Control, Controller, Path } from 'react-hook-form';
import NumberInput from '../../../shared/ui/NumberInput/NumberInput';
import { TypePortfolioWithoutPhotos } from './PortfolioForm';

interface IControllerComponent{
    control : Control<TypePortfolioWithoutPhotos>,
    name : Path<TypePortfolioWithoutPhotos>

}
const ControllerComponent:FC<IControllerComponent> = ({control, name}) => {
    return (
        <Controller name={name} control={control} render={({field}) => {
            const {name, value, onChange} = field
            return (
                <NumberInput title={name} name={name} onChange={onChange} value={value} />
            )
        }} />
    );
};

export default React.memo(ControllerComponent);