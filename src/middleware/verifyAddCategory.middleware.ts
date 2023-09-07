import { NextFunction, Request, Response } from "express"
import { AppError } from "../error"

import { addressRespository, categoryRespository } from "../repositories"
import { Address, Category } from "../entities"

const verifyAddress =async ( 
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> => {

    const address = request.body.address

    const addressExists : Address | null = await addressRespository.findOne({
        where: address
    })

    if(addressExists){
        throw new AppError("Address already exists", 409) 
    }

    return next()
}

const verifyCategoryId =async ( 
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> =>{

    const { categoryId } = request.body

    const categoryExists : Category | null = await categoryRespository.findOne({
        where: { id: categoryId}
    })

    if(!categoryExists){
        throw new AppError("Category not found", 404)
    }

    response.locals = { ...response.locals, categoryExists}
    return next()
}



export { verifyAddress, verifyCategoryId  }