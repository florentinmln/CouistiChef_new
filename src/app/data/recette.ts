import { Ingredient } from "./ingredient";

export interface Recette {
    preTime: number;
    cookTime: number;
    serving: number;
    ingredients: Ingredient[];
    image: string;
}
