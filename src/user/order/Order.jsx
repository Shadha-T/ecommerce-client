import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Orders() {

    useEffect(()=>{
        fetchorders()
    },[])

    const [orders,setOrders] = useState([])

    const fetchorders = async ()=>{
       const response = await axios.get('http://localhost:3000/api/orders')

       setOrders(response.data.products)
    }

  return (
    <div className='flex gap-3 '>

        {
            orders.map((item)=>{
                return (
                    <div className="">
                        <p>{item.fname}</p>
                        <p>{item.lname}</p>
                        <p>{item.products.map((item)=>{
                            return(
                                <>
                                <p>{item.name}</p>
                                
                                </>
                            )
                        })}</p>
                        {/* {JSON.stringify(item)} */}
                    </div>
                )
            })
        }
      
    </div>
  )
}