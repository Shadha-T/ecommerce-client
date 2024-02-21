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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[90%] m-auto h-[90vh] bg-slate-600 rounded-xl ">
        <div className="  flex gap-4 justify-end my-8 mx-10 ">
          {user && (
            <p className="text-lg text-white hover:text-yellow-300">
              {user.fname} {user.lname}
            </p>
          )}

          <p className="text-lg text-white hover:text-yellow-300">Profile</p>
          <p className="text-lg text-white hover:text-yellow-300">Cart</p>
          <p className="text-lg text-white hover:text-yellow-300">
            Transactions
          </p>

          <Link to={"/orders"}>
            <p className="text-lg text-white hover:text-yellow-300">Orders</p>
          </Link>
          <p
            onClick={() => {
              localStorage.removeItem("users");
              localStorage.removeItem("token");
              navigate("/user-login");
            }}
            className="text-lg text-white hover:text-yellow-300"
          >
            Logout
          </p>
        </div>

        <div className="mx-10 my-32 flex gap-10 flex-wrap justify-center">
          {products.map((item) => (
            <Link to={`/details/${item._id}`} state={{ products: item }} key={item._id}>
              <div className="bg-slate-500 w-[300px] p-7 rounded ">
                <img style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={`http://localhost:3000/${item.profile}`} alt={item.name} />

                <h1 className="text-white">{item.name}</h1>
                <p className="text-white">{item.price}</p>
                <p className="text-white">{item.details}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
