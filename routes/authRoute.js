import express from 'express'
const userRouter = express.Router();
import { createUser, deleteUserById, getUser, getUserById, updateUserById } from '../controllers/authContoller.js';


userRouter.post('/signup', createUser)
userRouter.get('/signup', getUser)
userRouter.get('/signup/:id', getUserById)
userRouter.delete('/signup/:id', deleteUserById);
userRouter.patch('/signup/:id', updateUserById);

export default userRouter;

