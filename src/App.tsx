import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Recipes } from "./pages/Recipes";
import { Recipe } from "./pages/Recipe";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  {
    path: "/:id",
    element: <Recipe />,
  },
]);

function App() {
  return (
    <div className="md:px-24 sm:px-6 px-0 py-3 flex flex-col items-center">
      <div className="max-w-5xl w-full">
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
      </div>
    </div>
  );
}

export default App;
