import { useEffect, useState } from "react";
import ViewComponent from "../../components/ViewComponent/ViewComponent";
import InputField from "../../components/Forms/InputField/InputField";
import { EditProduct, addProducts, deleteProduct, fetchProducts } from "../../api/admin";
import { errorToast } from "../../components/Toast";
import axios from "axios";
import {Avatar,Button} from "@mui/material"



function Product() {
  const [formFiled, setFormField] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isEdit, setIsEdit] = useState({status:false,id:null});
  const [isEditFormData, setIsEditFormData] = useState({profile:null,name:null,details:null,price:null});
  const [products,setProducts] = useState([])
  const [imagePreview,setImagePreview]=useState(null)
  const [Image,setImage]= useState(null)

  const formdatas = [
    {
      type: "text",
      placeholder: "Name",
      className: "",
      name: "name",
    },
    {
      type: "price",
      placeholder: "Price",
      className: "",
      name: "price",
    },
    {
      type: "quantity",
      placeholder: "Quantity",
      className: "",
      name: "quantity",
    },
    {
      type: "text",
      placeholder: "Desciption",
      className: "",
      name: "details",
    },
  ];

  const onChangeValues = (e) => {
    setFormField({ ...formFiled, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();


    // callapi for add product
    const formdata = new FormData()
    formdata.append("name",formFiled.name)
    formdata.append("details",formFiled.details)
    formdata.append("price",formFiled.price)
    formdata.append("profile",Image)
    const response = await addProducts(formdata)


    console.log(response,'response');

    setRefresh(!refresh)


    console.log(formFiled,'from');
  };

 


  const headings = {
    headingOne: "Profile",
    headingTwo: "Name",
    headingFour: "Price",
  };

  const handleClickView = (e) => {
    console.log(e, "ee");
    console.log("object");
  };

  console.log(products,'products');
  const onclickEdit = (e) => {
    console.log(e,'ee');
    setIsEdit({status:true,id:e})

    // return true

    const editData =  products.find((item)=>{
      console.log(item._id,'item');
      console.log(e,'edit');
      if(item._id === e ){
        return true
      }else{
        return null
      }
    })

    console.log(editData,'editdata');
    setIsEditFormData(editData)

    // setRefresh(!refresh)
  };

  console.log(isEditFormData,"kkk");
  const onclickDelete =async (e) => {
    await axios.delete(`http://localhost:3000/api/products/${e}`)
    setRefresh(!refresh)
  };


  useEffect(()=>{
    fetchData()


  },[refresh])
  
  const fetchData = async()=>{
    try {
      
      const response = await fetchProducts()
      console.log(response.data.products,'response');

      setProducts(response.data.products)
    } catch (error) {
      errorToast(error.message)
    }

  }

  const handleEdit = async(e)=>{
    console.log(e,'ee')
    e.preventDefault();

    await axios.put(`http://localhost:3000/api/products/${isEdit.id}`,isEditFormData)
    setRefresh(!refresh)
    setIsEdit({status:false,id:null})
    //edit refresh aakan into cart
  }

  const handleEditChange = (e)=>{
    setIsEditFormData({[e.target.name]:e.target.value})
  }
  const handlechangeimage =(e)=>{
    console.log("llll");
    console.log(e.target.files[0],'ee');
    setImage(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0]))

  }


return (
    <div>
       <Avatar alt='loading' src={imagePreview} style={{width:"100px",height:"100px"}}></Avatar>
       <input type='file' onChange={handlechangeimage} accept='image/*'/>
       <Button onClick={handleSubmit} variant="contained" style={{width:"200px",marginLeft:"5px"}}>submit</Button>
      <div>
        <h1 className="text-white">Product</h1>
        <table className=" w-[80%] m-auto">
        <tr className="">
          <th className="text-white">NAME</th>
          <th className="text-white">DETAILS</th>
          <th className="text-white">PRICE</th>
          <th className="text-white"></th>
          <th className="text-white"></th>
        </tr>
        
        {products.map(
          (
            {
              profile,
              name,
              details,
              price,
              _id,
            },
            index
          ) => {
            return (
              <tr key={index} className="text-center">
                <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src={`http://localhost:3000/${profile}`}/>

                <td className="text-white">{name}</td>
                <td className="text-white">{details}</td>
                <td className="text-white">{price}</td>
                <td className="text-green-600" onClick={() => onclickEdit(_id)}>
                  Edit
                </td>
                <td className="text-red-500" onClick={() => onclickDelete(_id)}>
                  Remove
                </td>
              </tr>
            );
          }
        )}
      </table>
      </div>
      <div className="flex justify-center items-center flex-col h-screen">

        {

          isEdit.status  ?

          <>


          <form action="" onSubmit={handleEdit} 
          className="w-[50%] rounded-md h-[500px] flex justify-center flex-col gap-5 items-center pb-[40%]"
          
          >
            <div className=" text-xl">
            <h1>Edit Product</h1>
            

              <input type="text" placeholder="name" name="name" onChange={handleEditChange}  value={isEditFormData?.name}/>
              <input type="text" placeholder="price" name="price" onChange={handleEditChange}  value={isEditFormData?.price} />
              <input type="text" placeholder="details" name="details" onChange={handleEditChange} value={isEditFormData?.details} />
              <input type="submit" className="bg-slate-600 text-white"/>
            </div>
          </form>

         </>
          :

          <>
          
          <form
          onSubmit={handleSubmit}
          action=""
          className="w-[50%] rounded-md h-[500px] flex justify-center flex-col gap-5 items-center pb-[40%]"
        >
          <h2 className="text-white text-xl">Add Product</h2>
          {

          }
          {formdatas.map(({ className, placeholder, type, name }, index) => (
            <InputField
              onChange={onChangeValues}
              key={index}
              type={type}
              placeholder={placeholder}
              name={name}
              className={`${className} max-w-[300px] w-[80%] h-[60px] bg-white flex justify-start ps-5 rounded-md items-center`}
            />
          ))}
          <input
            type="submit"
            className="text-white border-solid border-2 border-indigo-600 w-[4  0%]"
          />
        </form>
          
          </>

        }
      </div>
    </div>
  );
}

export default Product;