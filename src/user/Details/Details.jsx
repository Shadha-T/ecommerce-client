import React from 'react'
import { Link, useLocation } from 'react-router-dom'
 
function Details() {
const value=useLocation()

  return (
    <div className=''>
      <h1 className='text-4xl text-center'>PRODUCTS DETAILS</h1>
      <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src={`http://localhost:3000/${value.state.products.profile}`}/>
      <p>{value.state.products.name}</p>
      <p></p>
      <p></p>
<Link to="/place-order" state={{product:value.state.products
}}>
  <div className='h-[50px] flex justify-center items-center w-[160px] rounded-md ms-7 mt-8 text-black px-10 bg-pink-500'>
    <button>placeorder</button>
  </div>
</Link>
    </div>
  )
}

export default Details
