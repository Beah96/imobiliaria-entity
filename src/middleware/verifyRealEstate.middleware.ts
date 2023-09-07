import { NextFunction, Request, Response } from "express"
import { RealEstate } from "../entities"
import { realEstateRepository } from "../repositories"
import { AppError } from "../error"


const verifyRealEstate =async ( 
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> =>{

    const { realEstateId } = request.body

    const verifyRealEstate : RealEstate | null = await realEstateRepository.findOne({
        where:{
            id: realEstateId
        }
    })

    if(!verifyRealEstate){
        throw new AppError("RealEstate  not found", 404)
    }

    return next()
}

export {
    verifyRealEstate
}