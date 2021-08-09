import Product from "./models/productSchema.js";
import { products } from "../server/constants/products.js";

const DefaultData=async ()=>{
    try{
         await Product.deleteMany({});
         await Product.insertMany(products);

        console.log("Data successfully imported");
    }catch(error){
        console.log("Error is :-",error.message)
    }
}
export default DefaultData;