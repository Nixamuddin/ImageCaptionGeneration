import DiaryModel from "../Models/DiaryModel.js";
import fs from 'fs';
import slugify from 'slugify';
export const CreateController=async(req,res) => {
    try{
const {title,description}=req.fields;
const {photo}=req.files;
if(!title || !description){
    return res.status(202).send({success:false,message:" Title and Description is require"})
}
if(photo&&photo.size>1000000){
    res.status(202).send({success:false,message:"photo is require and should be less then 1 mb"})
}
const Diary=new DiaryModel({...req.fields,slug:slugify(title)})
if(photo){
    Diary.photo.data=fs.readFileSync(photo.path)
    Diary.photo.contentType
}
await Diary.save();
res.status(200).send({success:true,message:'Diary has been created', Diary})
    }
    catch(error){
        console.log(error);
        res.status(404).send({success:false, message:'internal server error', error});
    }
}
export const getAlldiary = async (req, res)=>{
    try{
const Diary=await DiaryModel.find({}).select('-photo').limit(12).sort({createdAt:-1});
res.status(200).send({success:true,counTotal:Diary.length, message:'All Diaries ',Diary})
    }
    catch(error){console.log(error)
    res.status(404).send({success:false, message:'internal server error',})}
}

export const PhotoController = async (req, res) => {
    try {
      const Diary = await DiaryModel.findById(req.params.id).select("photo");
      if (Diary.photo.data) {
        res.set("Content-type", Diary.photo.contentType);
        return res.status(200).send(Diary.photo.data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr while getting photo",
        error,
      });
    }
  };
  // get single product
export const getSinglController = async (req, res) => {
  try {
    const product = await DiaryModel
      .findOne( req.params.id )
      .select("-photo")
    res.status(200).send({
      success: true,
      message: "Single Diary Fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single Diary",
      error,
    });
  }
};

//delete controller
export const deleteController = async (req, res) => {
  try {
    await DiaryModel.findByIdAndDelete(req.params.id).select("-photo");
    res.status(200).send({
      success: true,
      message: "Diary Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting Diary",
      error,
    });
  }
};

//upate controller

export const updateController=async(req,res) => {
  try{
const {title,description}=req.fields;
const {photo}=req.files;
if(!title || !description){
  return res.status(202).send({success:false,message:" Title and Description is require"})
}
if(photo&&photo.size>1000000){
  res.status(202).send({success:false,message:"photo is require and should be less then 1 mb"})
}
const Diary= await DiaryModel.findByIdAndUpdate(req.params.id,{...req.fields,slug:slugify(title)},{new:true,})
if(photo){
  Diary.photo.data=fs.readFileSync(photo.path)
  Diary.photo.contentType
}
await Diary.save();
res.status(200).send({success:true,message:'Diary has been created', Diary})
  }
  catch(error){
      console.log(error);
      res.status(404).send({success:false, message:'internal server error', error});
  }
}

// saerch diary

export const saerch=async(req,res) =>{
try{
const {keyword}=req.params;
const result=await DiaryModel.find({$or:[{title:{$regex:keyword, options:'i'}},]}).select('-photo');
res.json(result);
}
catch(error){
  res.status(404).send({success:false, message:'internal server error'})
}
}