import  jwt  from 'jsonwebtoken';
export const SignInrequire=async(req,res,next)=>{
    try{
const decode=jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
req.user=decode;
next();
    }
    catch(error){
console.log(error);
    }
}