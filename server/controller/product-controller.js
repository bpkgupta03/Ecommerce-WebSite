import Product from "../models/productSchema.js";

export const getProducts =async(request,response)=>{
    try{
       const products =await Product.find({});
       response.json(products);
    }catch(error){
        console.log("Error is :-",error.message);
    }
}

export const getProduct = async(request,response)=>{
    try{
        const product = await Product.find({id:request.params.id});
        response.json(product);
    }catch(error){
        console.log("error is ",error.message);
    }
}