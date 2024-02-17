import { instance } from "../axios"

export const userRegister = (data)=>{
    try {
        return instance.post('/user/register',data)
    } catch (error) {
        return error
    }
} 

export const userLogin = (data)=>{
    try {
        return instance.post('/user/login',data)
    } catch (error) {
        return error
    }
} 

export const addProducts = (data)=>{
    try {
        return instance.post('/products',data)
    } catch (error) {
        return error
    }
} 

export const fetchProducts = (data)=>{
    try {
        return instance.get('/products',data)
    } catch (error) {
        return error
    }
} 

export const deleteProduct = (id)=>{
    try {
        return instance.delete(`/products/${id}`)
    } catch (error) {
        return error
    }
} 

export const EditProduct = (id)=>{
    try {
        return instance.put(`/products/${id}`)
    } catch (error) {
        return error
    }
} 