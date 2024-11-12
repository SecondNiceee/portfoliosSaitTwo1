import { z, ZodType } from "zod";
import { TypePortfolio } from "../../../../entities/profile/model/TypePortfolio";

type ZodTypeWithoutAPhotos = Omit<TypePortfolio, "photos">

export const PortfolioSchema : ZodType<ZodTypeWithoutAPhotos> = z.object({
    title : z.string().min(3, {message : "Title must be at least 3 characters"}).max(20, {message : "Title must be no longer then 15 characters"}).regex(/^[a-zA-Zа-яА-Я]+$/, 'Title must contain only letters'),
    likes : z.number(),
    views : z.number(),

    description : z.string().min(15, {message : "Description must be at least 15 characters"}).max(700, {message : "Description must be no longer than 700 characters"}),

    })