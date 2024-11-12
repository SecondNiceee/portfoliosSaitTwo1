import { z, ZodType } from "zod";
import { TFormValues } from "../UI/SignUp";
import { TLoginFormValues } from "../UI/SignIn";

export const UserSchema : ZodType<TFormValues> = z.object({
    firstName : z.string().min(3, {message : "Username must be at least 3 characters"}).regex(/^[a-zA-Zа-яА-Я ]+$/, 'Name must contain only letters'),
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6, {message : "Password must be at least 6 characters"}),
    confirmPassword : z.string()
    }).refine((data) => data.password === data.confirmPassword, {
    path : ['confirmPassword'],
    message : "Passwords does not match"
    })

export const UserLoginSchema : ZodType<TLoginFormValues> = z.object({
        email : z.string().email({message : "Invalid email address"}),
        password : z.string().min(6, {message : "Password must be at least 6 characters"}),
        firstName : z.string().min(3, {message : "Username must be at least 3 characters"}).regex(/^[a-zA-Zа-яА-Я ]+$/, 'Name must contain only letters')
        })