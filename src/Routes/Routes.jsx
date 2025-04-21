import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favourite/Favorite";
import About from "../Pages/About/About";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayouts,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true, // same as, path: "/",
            Component: Home,
            hydrateFallbackElement: <p>Loading, Please wait......</p>,
            loader: () => fetch('../phones.json'),
        },
        {
          path: "/about",
          Component: About,
        },
        {
          path: "/favorite",
          Component: Favorite,
        },
        {
          path: "/PhoneDetails/:detail",
          Component: PhoneDetails,
          hydrateFallbackElement: <p>Loading, Please wait......</p>,
          loader: () => fetch('../phones.json'),
        },
        {
          path: "/cart",
          Component: Cart,
        },
        {
          path: "/favorite",
          Component: Favorite,
        },
      ]
    },
  ]);

  export default router;