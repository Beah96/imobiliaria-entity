import { Router } from "express";
import middleware from "../middleware";
import { loginSchema } from "../schemas/login.schema";
import { loginControllers } from "../controllers";

const loginRouter : Router = Router()

loginRouter.post("",
    middleware.validateBody(loginSchema),
    loginControllers.doLogin
)

export default loginRouter