import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserCart() {

    const [cart,setCart] = useState([])


    useEffect(()=>{
        fetchCart()
    },[])

 

    const fetchCart = async ()=>{
       const response = await axios.get('http://localhost:3000/api/user/listCart',{headers:{'Authorization':localStorage.getItem('token')}})
       setCart(response.data.data)
    }



  return (
    <div className='w-full bg-slate-100 flex'>
      {
        cart.map((item)=>{
            return(
                <div className='w-full flex'>
                {item.product.map((product)=>{
                    return(
                        <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.details}</p>

                        </div>
                    )
                })}  
                </div>
            )
        })
      }
    </div>
  )
}

export default UserCart
