import { Router } from "express";
import userContoller from "../controller/user.js";

const userRouter = Router()

userRouter.get('/:id', userContoller.getUser)
userRouter.post('/', userContoller.createUser);
userRouter.delete('/:id', userContoller.deleteUser)
userRouter.put('/:id',userContoller.editUser)

export default userRouter