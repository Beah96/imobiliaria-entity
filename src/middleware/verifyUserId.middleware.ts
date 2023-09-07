import { NextFunction, Request, Response } from "express"
import { userRepository } from "../repositories"
import { User } from "../entities"
import { AppError } from "../error"

const verifyUser =async ( 
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> => {

    const verifiedUser : User | null = await userRepository.findOne({
        where: {id: Number(request.params.id)}
    })

    if(!verifiedUser ){
        throw new AppError("User not found", 404)
    }

    response.locals = { ... response.locals, verifiedUser };
    return next()
    
}

export { verifyUser }