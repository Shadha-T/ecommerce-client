import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Transactions() {
    const [transaction,setTransaction] = useState([])


    useEffect(()=>{
        fetchorders()
    },[])

 

    const fetchorders = async ()=>{
       const response = await axios.get('http://localhost:3000/api/users/transactions',{headers:{'Authorization':localStorage.getItem('token')}})

       setTransaction(response.data.data)
    }


  return (
    <div>
      <table class="table-auto">
  <thead>
    <tr>
      <th>transaction id</th>
      <th>product name</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    {
        transaction.map((item)=>
        {
            return(

    <tr>
      <td>{item.transactionId}</td>
        {item.product.map((product)=>{
            return(
                <>
                <td>
                {product.name}
                </td>
                <td>{product.price}</td>
                </>
            )
      })}
    </tr>
         ) })
    }
  </tbody>
</table>
    </div>
  )
}

export default Transactions