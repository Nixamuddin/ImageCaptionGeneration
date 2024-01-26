import express from 'express';
import { Register, forgotPassword, login, resetpassword } from '../Controllers/UserController.js';
const router=express.Router();
router.post('/register',Register );
router.post('/login', login)
router.post('/forgot', forgotPassword);
router.post('/reset', resetpassword)
export default router;