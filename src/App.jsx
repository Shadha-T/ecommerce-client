import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminRegister from "./admin/Register/Register";
import AdminLogin from "./admin/Login/Login";
import Product from "./admin/Product/Product";
import Cart from "./admin/Cart/Cart";
import Orders from "./admin/Orders/Orders";
import Payment from "./admin/Payment/Payment";
import Home from "./user/Home/Home";
import User from "./user/User";
import Protected from "./admin/Protected/Protected";
import Login from "./user/Login/Login";
import Register from "./user/Register/Register";
import Details from "./user/Details/Details";
import Placeorder from "./user/placeorder/Placeorder";
import Order from "./user/orders/Orders";
import Profile from "./user/profile/Profile";
import Transaction from "./user/transaction/Transaction";
import UserCart from "./user/cart/UserCart";





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/details/:id",
      element:<Details/>
    },
    {
      path: "user-login",
      element: <Login/>,
    },
    {
      path: "user-register",
      element: <Register />,
    },
{
  path: "/place-order",
  element: <Placeorder />,
},
{
  path: "/orders",
  element: <Order/>
},
{
  path: "/profile",
  element: <Profile/>
},
{
  path: "/cart",
  element: <UserCart/>
},
{
  path: "/transaction",
  element: <Transaction/>
},





    {
      path: "/admin",
      element: <Protected/>,
      children: [
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "home",
          element:<Home/> 
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "users",
          element:<User/>
        },
      ],
    },
   

    {
      path: "admin-register",
      element: <AdminRegister />,
    },
    {
      path: "admin-login",
      element: <AdminLogin />,
    },

    
  ]);



  return <RouterProvider router={router} />;
}

export default App;
