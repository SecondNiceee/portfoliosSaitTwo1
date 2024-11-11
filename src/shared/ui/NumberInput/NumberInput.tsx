import LogButton from "../LogButton/LogButton"
import cl from "./NumberInput.module.scss"

interface INumberInput{
    name : string ,
    value : number,
    onChange : (...event: any[]) => void,
    title : string
}

export default function NumberInput({name, value, onChange, title} : INumberInput){
    const changeHanlder:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.length > 1 ? event.target.value.replace(/^0+/, '') : event.target.value 
        onChange(value)
    }
    return (
        <label className={cl.numberInput}>
            <p className={cl.title}>{title}</p>
            <div className={cl.numberImputWrapper}>
                <input onChange={changeHanlder} className={cl.textInput} min={0} value={value} id={name} placeholder={name} name={name} type={"number"} />
                <div className={cl.buttonsBlock}>
                    <LogButton onClick={() => {onChange(value + 1)}}><p className={cl.buttonText}>+</p></LogButton>
                    <LogButton onClick={() => {onChange(value - 1)}}><p className={cl.buttonText}>-</p></LogButton>
                </div>
            </div>
        </label >
    )
};