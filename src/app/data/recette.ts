import { Ingredient } from "./ingredient";

export interface Recette {
    name: string;
    preTime: number;
    cookTime: number;
    serving: number;
    ingredients: Ingredient[];
    image: string;
}
