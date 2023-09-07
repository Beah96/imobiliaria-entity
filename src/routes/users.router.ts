import { Router } from "express";
import middleware from "../middleware";
import { userControllers } from "../controllers";
import { createUserSchema, updateSchema } from "../schemas/user.schema";


const userRouter : Router = Router()

userRouter.post("",
    middleware.validateBody(createUserSchema),
    middleware.verifyEmail,
    userControllers.createUser
)

userRouter.get("",
    middleware.verifyToken,
    middleware.verifyIsAdm,
    userControllers.getAllUsers
)

userRouter.patch("/:id",
    middleware.validateBody(updateSchema),
    middleware.verifyUser, 
    middleware.verifyToken,
    middleware.verifyPermission,
    userControllers.updateUser    
)

userRouter.delete("/:id",
    middleware.verifyUser, 
    middleware.verifyToken,
    middleware.verifyPermission,
    userControllers.deleteUser
)

export default userRouter
