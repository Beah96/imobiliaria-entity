import { NextFunction, Request, Response } from "express"
import { categoryRespository } from "../repositories"
import { AppError } from "../error"
import { Category } from "../entities"

const verifyCategory =async ( 
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> => {

    const verifiedName : Category | null = await categoryRespository.findOne({
        where: {name: request.body.name}
    })

    if(verifiedName){
        throw new AppError("Category already exists", 409)
    }

    return next()
    
}

export { verifyCategory }