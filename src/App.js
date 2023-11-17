import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";
import Cart from "./components/Cart";

const FoodApp = () => {
  return (
    <div>
      <Header />
      <BodyComp />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Careers",
    element: <Careers />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
