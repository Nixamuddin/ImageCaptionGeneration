import express from 'express'
import mongoose  from 'mongoose';
const Diaryschema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
description:{
        type:String,
        require:true
    },
    photo:{
        data:Buffer,
        contentType:String,
    },


},{timestamps:true})
export default mongoose.model('Diarymodel',Diaryschema)
