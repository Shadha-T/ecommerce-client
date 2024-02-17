import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { errorToast } from '../../components/Toast';

function Placeorder() {
    const value = useLocation();
    console.log(value,"value");
    const [order,setOrder]= useState({lname:null,fname:null})


    const handleChange=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        setOrder({...order,[e.target.name]:e.target.value})

    }
    const handlesubmit = async (e) => {
        try {
      e.preventDefault();
        let data = {
          ...order,
          productId: value.state.product._id,
          userId: JSON.parse(localStorage.getItem("users"))._id,
        };
  
        // alert(JSON.stringify(data),'data')
  
        await axios.post("http://localhost:3000/api/orders", data);
  
        successToast("order successfully");
      } catch (error) {
        errorToast(error.message || error.data.response.message || "error");
      }
  
      // alert(JSON.stringify(order))
    };
  
  return (
    <div>
        <p>{value.state.product.name}</p>
        <p>{value.state.product.price}</p>
        <p>{value.state.product.details}</p>

       <div className="">
        <div class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <form onSubmit={handlesubmit}>
            <div class="grid grid-cols-2 gap-4">
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="fname"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="First name"
                  onChange={handleChange}
                  value={order.fname}
                />
                <label
                  for="emailHelp123"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  First name
                </label>
              </div>

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                  onChange={handleChange}
                  value={order.lname}
                  name="lname"
                />
                <label
                  for="exampleInput124"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Last name
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs text-black font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  
  )
}

export default Placeorder
