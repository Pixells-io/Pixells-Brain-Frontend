import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuTop from "./layouts/MenuTop";
import SideLayout from "./pages/SideLayout";
import MainSuscriptions from "./pages/Suscriptions/MainSuscriptions";
import Users, { action as ActionUser } from "./pages/Admin/Users";
import { getUsers } from "./pages/Admin/utils";
import Login, { action as LoginAction } from "./pages/Login/Login";
import { getSuscriptions } from "./pages/Suscriptions/utils";
import Discounts, { action as ActionDiscount } from "./pages/Discount/Discount";
import { getDiscounts } from "./pages/Discount/utils";

//Layouts

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuTop />,
    children: [
      {
        path: "/",
        element: <SideLayout />,
        children: [
          {
            path: "/suscriptions",
            element: <MainSuscriptions />,
            loader: getSuscriptions,
          },
          {
            path: "/users",
            element: <Users />,
            loader: getUsers,
            action: ActionUser,
          },
          {
            path: "/discounts",
            element: <Discounts />,
            loader: getDiscounts,
            action: ActionDiscount,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: LoginAction,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
