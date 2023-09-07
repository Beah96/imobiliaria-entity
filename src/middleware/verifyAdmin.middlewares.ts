import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const verifyPermission = (
    request : Request,
    response : Response,
    next : NextFunction
) : void =>{

    const { id } = request.params
    const { sub, admin } = response.locals.decoded

    if(sub !== id && !admin){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

const verifyIsAdm = (
    request : Request,
    response : Response,
    next : NextFunction
) : void =>{
 
    const { admin } = response.locals.decoded

    if(!admin){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

export { verifyPermission, verifyIsAdm } 