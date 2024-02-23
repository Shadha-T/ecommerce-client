import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Orders() {

    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetchorders()
    },[])


    const fetchorders = async ()=>{
       const response = await axios.get('http://localhost:3000/api/orders')

       setOrders(response.data.products)
    //    console.log(response.data.users);
    }


  return (
    <div className='flex gap-3 '>
       {
            orders.map((item) => {
                return (
                    <div className="">
                        <div className=' '>
                        <p>{item.fname}</p>
                        <p>{item.lname}</p>
                        <p>{item.products.map((item)=>{
                            return(
                                <>
                                <p>{item.name}</p>
                            <img src={`http://localhost:3000/${item.profile}`} alt="" style={{height:"100px",width:"100px", borderRadius:"100px"}}/> 
                                <p>{item.price}</p>
                                
                                </>
                            )
                        })}</p>
                        {/* {JSON.stringify(item)} */}
                        </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}