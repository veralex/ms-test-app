import { gql, useQuery } from "@apollo/client";
import {
  TRecipeResponse,
} from "../types/recipe";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'


const RECIPE_QUERY = gql`
  query TRecipe($id: String!) {
    recipe(id: $id) {
      title
      description
      chef {
        name
      }
      photo {
        url
      }
      tagsCollection {
        items {
          name
        }
      }
    }
  }
`;
export const Recipe = () => {
  const { id } = useParams();
  const { data } = useQuery<TRecipeResponse>(RECIPE_QUERY, {
    variables: { id },
  });
  const recipe = data?.recipe;

  return (
    <>
      <Link to="/" className="hover:underline text-blue-500">Back to recipes</Link>
      <div className="flex flex-col py-3 gap-3">
        {recipe && (
          <>
            <img
              className="max-h-64 self-start"
              src={`${recipe.photo.url}`}
              alt={recipe.photo.title}
              loading="lazy"
            ></img>
            <h5 className="font-bold sm:text-2xl">{recipe.title}</h5>
            <ReactMarkdown>{recipe.description}</ReactMarkdown>
            {recipe.chef?.name && <p>By {recipe.chef.name}</p>}
            <div className="flex gap-x-3">
              {recipe.tagsCollection.items.map(({ name }) => (
                <span key={name} className="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  {name}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
