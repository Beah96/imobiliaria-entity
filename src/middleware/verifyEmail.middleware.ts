import { NextFunction, Request, Response } from "express"
import { userRepository } from "../repositories"
import { User } from "../entities"
import { AppError } from "../error"

const verifyEmail =async ( 
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> => {

    const verifiedEmail : User | null = await userRepository.findOne({
        where: {email: request.body.email}
    })

    if(verifiedEmail){
        throw new AppError("Email already exists", 409)
    }

    return next()
    
}

export { verifyEmail }