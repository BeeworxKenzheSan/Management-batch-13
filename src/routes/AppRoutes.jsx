import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFoundPage from "../pages/404";
import Welcome from "../layouts/Welcome";
import Main, { getData } from "../layouts/Main";
import { CreateForm, PostData } from "../components/CreateForm";
import { getDataById, updateData, UpdateForm } from "../components/UpdateForm";

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
          element: <Main />,
          loader: getData,
        },
        {
          path: "create",
          element: <CreateForm />,
          action: PostData,
        },
        {
          path: ":adilet/update",
          element: <UpdateForm />,
          loader: getDataById,
          action: updateData,
        },
      ],
      errorElement: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
