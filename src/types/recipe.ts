
export type TRecipeCollectionItem = {
  title: string;
  photo: {
    url: string,
    title: string
  };
  sys: {
    id: string;
  }
}

export type TRecipe = TRecipeCollectionItem & {
  description: string;
  chef: { name: string };
  tagsCollection: { items: Array<{ name: string }> };
}

export type TRecipeCollectionResponse = {
  recipeCollection: { items: Array<TRecipeCollectionItem> }
}

export type TRecipeResponse = {
  recipe: TRecipe
}