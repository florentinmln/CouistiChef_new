import { Recette } from "../data/recette";

export abstract class RecipeBookRepository {
    public abstract recettes: Recette[]
    public abstract getRecette(name: string): Recette|undefined
}
