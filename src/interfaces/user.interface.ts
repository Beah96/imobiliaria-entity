import { z } from "zod";
import { createUserSchema, userReturn, userSchema } from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>

type IUserCreate = z.infer<typeof createUserSchema>

type IUserReturn = z.infer<typeof userReturn>

type IUserList = Array<IUserReturn>

type IUserUpdate = DeepPartial<IUser>

export {
    IUser,
    IUserCreate,
    IUserReturn,
    IUserList,
    IUserUpdate
}