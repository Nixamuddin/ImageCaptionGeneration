import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import Router from './Routes/UserRoute.js'
import DiaryRouter from './Routes/DiaryRoute.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://0.0.0.0/Image-Caption',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use('/api/v1/auth',Router);
app.use('/api/v1/diary',DiaryRouter);
const port=process.env.PORT || 8080;
app.listen(port,()=>{console.log(`listening on port ${port} `)})