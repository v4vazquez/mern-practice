import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required:true
    },
},{
    timestamps:true// createdAt, updatedAt fields

});

const Product = mongoose.model('Product', productSchema); //create a model called 'product', and use this schema(productSchema)
//this is put as "Product" because mongoose will always lowercase it and add an S to an end

export default Product;