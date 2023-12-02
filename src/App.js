import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import Careers from "./components/Careers";
import Cart from "./components/Cart";
import ErrorComponent from "./components/ErrorComponent";
import RestroInfo from "./components/RestroInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const FoodApp = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const lazyLoadedComp = React.lazy(()=>import('./components/About'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      {
        path: "/",
        element: <BodyComp />,
      },
      {
        path: "/home",
        element: <BodyComp />,
      },
      {
        path: "/about",
        element: <Suspense >{lazyLoadedComp}</Suspense>,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/restaurant/:resId",
        element: <RestroInfo/>
      }
    ],
    errorElement: <ErrorComponent />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
