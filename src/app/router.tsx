import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import MainLayout from "../layouts/mainLayout/MainLayout";
import HomePage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,

    element: <MainLayout />,

    children: [
      {
        index: true,

        element: <HomePage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
