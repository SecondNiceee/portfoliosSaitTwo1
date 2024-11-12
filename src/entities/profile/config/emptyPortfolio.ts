import { TypePortfolio } from "../model/TypePortfolio";

export const empyPortfolio:Omit<TypePortfolio, "id"> = {
    title : "",
    likes : 0,
    description : "",
    photos : [],
    views : 0
}