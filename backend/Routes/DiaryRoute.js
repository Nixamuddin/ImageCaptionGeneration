import express from 'express';
import { CreateController, PhotoController, getAlldiary, getSinglController, updateController,deleteController,saerch} from '../Controllers/DiaryController.js';
import formidable from 'express-formidable'
import {SignInrequire}  from '../Middleware/Middleware.js';
const DiaryRouter=express.Router();
DiaryRouter.post('/Create', formidable(), CreateController)
DiaryRouter.get('/getAll', getAlldiary )
DiaryRouter.get('/photo/:id', PhotoController)
DiaryRouter.get('/single-diary/:id', getSinglController);
DiaryRouter.put('/update-diary/:id', updateController);
DiaryRouter.delete('/delete-diary/:id', deleteController)
DiaryRouter.get('/saerch/:keyword',saerch)
export default DiaryRouter;