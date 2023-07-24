import { gql, useQuery } from "@apollo/client";
import { TRecipeCollectionResponse } from "../types/recipe";
import { Link } from "react-router-dom";

const RECIPE_LIST_QUERY = gql`
  query {
    recipeCollection {
      items {
        sys {
          id
        }
        title
        photo {
          title
          url
        }
      }
    }
  }
`;

export const Recipes = () => {
  const { data, loading } = useQuery<TRecipeCollectionResponse>(RECIPE_LIST_QUERY);

  return (
    // <div className="flex min-h-screen flex-col items-center w-100">
    <div>
      <ul className="divide-y">
        {data?.recipeCollection.items.map((recipe) => (
          <li className="hover:bg-gray-100" key={recipe.sys.id}>
            <Link
              to={recipe.sys.id}
              className="flex sm:flex-row flex-col justify-between gap-x-6 sm:p-5 py-5"
            >
              <span>{recipe.title}</span>
              <img
                className="sm:order-last order-first sm:h-16"
                src={`${recipe.photo.url}?h=256&q=50`}
                alt={recipe.photo.title}
                loading="lazy"
              ></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
