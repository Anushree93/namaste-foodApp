import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import Careers from "./components/Careers";
import Cart from "./components/Cart";
import ErrorComponent from "./components/ErrorComponent";
import RestroInfo from "./components/RestroInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import About from "./components/About";

const FoodApp = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(()=>{
  //API
    const data = {
      name : 'Anushree'
    }
    setUserInfo(data.name);
  },[]);


  return (
    <UserContext.Provider value={{userName: userInfo, setUserInfo}}>
     <div>
      <Header />
      <Outlet />
     </div>
    </UserContext.Provider>
  );
};

//const lazyLoadedComp = React.lazy(()=>import('./components/About'));

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
        //element: <Suspense >{lazyLoadedComp}</Suspense>,
        element: <About/>
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
