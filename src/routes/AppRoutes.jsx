import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFoundPage from "../pages/404";
import Welcome from "../layouts/Welcome";
import Main from "../layouts/Main";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "management",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <h1>Main</h1>,
        },
        {
          path: "create",
          element: <h1>Create</h1>,
        },
        {
          path: "update",
          element: <h1>Update</h1>,
        },
      ],
      errorElement: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
