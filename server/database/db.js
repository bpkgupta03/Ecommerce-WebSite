import mongoose from 'mongoose';


const Connection = async(username,password)=>{
    
 const URL=`mongodb+srv://${username}:${password}@ecommerce.mf44s.mongodb.net/eCommerce?retryWrites=true&w=majority`
  try{
    await mongoose.connect(URL,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });
    console.log("Database successfully connected");
  }catch(error){
      console.log("Error:- ",error.message);
  }
  
}

export default Connection;