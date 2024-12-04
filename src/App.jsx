import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuTop from "./layouts/MenuTop";
import SideLayout from "./pages/SideLayout";
import MainSuscriptions from "./pages/Suscriptions/MainSuscriptions";
import Users, { action as ActionUser } from "./pages/Admin/Users";

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
          },
          {
            path: "/users",
            element: <Users />,
            action: ActionUser,
          },
        ],
      },
    ],
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
