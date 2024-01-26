import mongoose from "mongoose";
const Userschema=new mongoose.Schema({
    username: {
        type: String, required: true,
    },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role:{type: Boolean,
        default: 0 },
    resetToken:String,
    resetTokenExpiration:Date,

},{timestamps:true});
const UserModel= mongoose.model("User", Userschema)
export default UserModel;
export const validate = async (resetToken) => {
    try {
        console.log("Received Token for Validation:", resetToken);

        const user = await UserModel.findOne({ resetToken, resetTokenExpiration: { $gt: Date.now() } });

        if (!user) {
            console.log("User not found for Token:", resetToken);
            return null;
        }

        console.log("User found for Token:", user);

        return user;
    } catch (error) {
        console.error("Error in validate function:", error);
        throw error;
    }
};
