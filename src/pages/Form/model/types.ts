import { FieldValues } from "react-hook-form"

export type TLoginValues<T extends FieldValues> = {
    error : keyof T,
    name : keyof T,
    type : string
}

export type TRegisterValues<T extends FieldValues> = {
    error : keyof T,
    name : keyof T,
    type : string
}