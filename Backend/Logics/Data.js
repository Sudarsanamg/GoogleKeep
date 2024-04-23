const model = require('../Database/Models/UserModel');

const Data= async(req,res)=>
{
    console.log('Data');
    const {email}=req.body;
    console.log(email);
    try{
        const user=await model.findOne({email}).then((user)=>{  
            console.log(user);
            if(!user){
                return res.status(400).json({message:"User does not exist"});
            }
            return res.status(200).json(user.array);
        }
        ).catch((error)=>{
            console.error(error);
            return res.status(500).json({message:"Internal server error"});
        });
        
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal server error"});
    }
   
}
module.exports=Data;
