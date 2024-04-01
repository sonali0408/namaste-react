import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense, lazy, useEffect, useState } from "react";
import HooksDemo from "./components/HooksDemo";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

/**
 * Chunking/ Code Splitting / Dynamic Bundling
 * Lazy Loading / On Demand Loading
 * @returns
 */

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  // Authentication Logic
  useEffect(() => {
    const data = {
      name: "Sonali",
    };
    setUserName(data.name);
  }, []);
  return (
    /**Added setUserName to userContext so that it can be used elsewhere in the app to set the user */
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app text-center">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      {
        path: "/demo",
        element: <HooksDemo></HooksDemo>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ],
  },
]);

export default App;
