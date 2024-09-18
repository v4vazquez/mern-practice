import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getProducts  =  async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({success:true, data:products})
    } catch (error) {
        console.log("error in fetching prodcuts", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
}

export const createProduct = async (req,res) =>{
    const product = req.body; //user will send this data 
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"please provide all fields"});
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct});
    } catch (error) {
        console.error("Error in Create Product:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
}; //this is the request and response

export const updateProduct = async(req, res)=>{
    
    const{id} = req.params; //
    
    const product = req.body; //gives us the items inside the body that the user is putting in
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Invalid product Id"});
    }
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product,{new:true}); //the id of the product and the fields we are updating from req.body, and new:true is a method that returns the old document before the update happens
        res.status(200).json({success:true, data:updatedProduct});
    } catch (error) {
        res.status(500).json({success:false, message:"Server is not found"})
    }
}

export const deleteProduct = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Invalid product Id"});
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product successfully deleted"})
    } catch (error) {
        console.log("Error in deleting the product", error.message);
        res.status(500).json({success:false, message:"Server Error"})
    }
}