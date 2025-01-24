import { Fragment } from "react";
import Welcome from "./Pages/Welcome";
import { useRoutes } from "react-router-dom";
import Register from "./Pages/Sign up";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import TrendingPage from "./Pages/Trending";
import More from "./Pages/Details";
import Soon from "./Pages/Soon";
import Series from "./Pages/Series";
import Favourites from "./Pages/Favourites";
import AuthPage from "./Pages/private-route";
import SearchDetails from "./Pages/Search/SearchDetails";
import FavDetails from "./Pages/Favourites/details";

function CustomRoute() {
  const element = useRoutes([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "Signup",
      element: <Register />,
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      element: <AuthPage />,
      children: [
        {
          path: "Home",
          element: <Home />,
        },
        {
          path: "Trending",
          element: <TrendingPage />,
        },
        {
          path: "Home/Trending/:id",
          element: <More />,
        },
        {
          path: "Home/Coming Soon/:id",
          element: <More />,
        },
        {
          path: "Soon",
          element: <Soon />,
        },
        {
          path: "Series",
          element: <Series />,
        },
        {
          path: "Favourites",
          element: <Favourites />
        },
        {
          path: "Favourites/:id",
          element: <FavDetails />,
        },
        {
          path: "search/:id",
          element: <SearchDetails />,
        },
      ],
    },
  ]);

  return element;
}

function App() {
  return (
    <Fragment>
      <CustomRoute />
    </Fragment>
  );
}

export default App;
