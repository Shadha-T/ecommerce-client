import { Avatar, Card } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Profile() {


  const [profile,setProfile]= useState({})

  useEffect(() => {
    fetchData();
  }, []);



  // const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/profile",{headers:{'Authorization':`${localStorage.getItem("token")}`}});
      setProfile(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card style={{width:"600px",margin:"auto",marginTop:"5rem",backgroundColor:"lightblue",padding:"20px"}}>
        <div className="flex gap-5 justify-around">
            <Avatar></Avatar>
            <p>
                <h5>{profile.lname}</h5>
                <p>Email</p>
            </p>
            <button className='bg-pink-600 text-white px-3 rounded'>EDIT PROFILE</button>
        </div>
      </Card>

      <Card style={{width:"600px",margin:"auto",backgroundColor:"lightgray",padding:"20px"}}>
        <div className="flex gap-5 justify-around my-5">
            <button className='bg-pink-600 text-white p-2 rounded'>My Orders</button>
            <button className='bg-pink-600 text-white p-2 rounded'>wishlist</button>
        </div>
        <div className="flex justify-center">
            <button>
                Log Out
            </button>
        </div>
      </Card>
    </div>
  )
}

export default Profile