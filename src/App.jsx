import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./layouts/Menu";
import TermsConditions from "./pages/Landing/TermsConditions";
import PrivacyNotice from "./pages/Landing/PrivacyNotice";

//Layouts

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Landing/HomePage"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/terminos-y-condiciones",
        element: <TermsConditions />,
      },
      {
        path: "/aviso-de-privacidad",
        element: <PrivacyNotice />,
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
