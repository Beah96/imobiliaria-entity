import { Request, Response } from "express";
import { User } from "../entities";
import { userServices } from "../services";
import { userListschema, userReturn } from "../schemas/user.schema";

const createUser =async (
    request: Request,
    response: Response,
): Promise<Response> => {

    const user : User = await userServices.createUser(request.body)

    return response.status(201).json(userReturn.parse(user))
}

const getAllUsers =async ( 
    request: Request,
    response: Response,
): Promise<Response> =>  {

    const getAllUsers : User[] = await userServices.getUsersList()

    return response.status(200).json(userListschema.parse(getAllUsers))
    
}

const updateUser =async ( 
    request: Request,
    response: Response,
): Promise<Response> =>  {

    const { verifiedUser } = response.locals

    const updatedUser : User = await userServices.updateUser(verifiedUser, request.body)

    return response.status(200).json(userReturn.parse(updatedUser))
    
}

const deleteUser =async ( 
    request: Request,
    response: Response,
): Promise<Response> =>  {

    const { verifiedUser } = response.locals

    await userServices.deleteUser(verifiedUser)

    return response.status(204).json()    
}



export default{
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}