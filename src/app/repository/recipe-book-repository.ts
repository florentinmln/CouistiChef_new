import { Recette } from "../data/recette";

export abstract class RecipeBookRepository {
    public abstract recettes: Recette[]
}
