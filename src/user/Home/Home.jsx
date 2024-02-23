import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const user = JSON.parse(localStorage.getItem("users"));


  const addtoCart = async (id) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/addtocart", { productId: id }, { headers: { 'Authorization': localStorage.getItem("token") } });
   console.log("cart added successfully",response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return  (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[90%] m-auto h-[90vh] bg-slate-600 rounded-xl ">
        <div className="  flex gap-4 justify-end my-8 mx-10 ">
          {user && (
            <p className="text-lg text-white hover:text-red-300">
              {user.fname} {user.lname}
            </p>
          )}

          <Link to={"/profile"}>
            <p className="text-lg text-white hover:text-red-300">Profile</p>
          </Link>
          <Link to={"/cart"}>
            <p className="text-lg text-white hover:text-red-300">Cart</p>
          </Link>
          <Link to={"/transaction"}>
            <p className="text-lg text-white hover:text-red-300">
              Transactions
            </p>
          </Link>

          <Link to={"/orders"}>
            <p className="text-lg text-white hover:text-red-300">Orders</p>
          </Link>









          <p
            onClick={() => {
              localStorage.removeItem("users");
              localStorage.removeItem("token");
              navigate("/user-login");
            }}
            className="text-lg text-white hover:text-red-300"
          >
            Logout
          </p>
        </div>

        <div className="mx-10 my-32 flex gap-10 flex-wrap justify-center">
          {products.map((item) => (
              <div className="bg-red-300 w-[300px] p-7 rounded ">
            <Link to={`/details/${item._id}`} state={{ products: item }} key={item._id}>
                <img style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={`http://localhost:3000/${item.profile}`} alt={item.name} />

                <h1 className="text-white">{item.name}</h1>
                <p className="text-white">{item.price}</p>
                <p className="text-white">{item.details}</p>
            </Link>
            <button onClick={() => {
            addtoCart(item._id)
          }}>

            <div className="text-white text-center">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </button>
              </div>







          ))}

         
        </div>
      </div>
    </div>
  );
}
