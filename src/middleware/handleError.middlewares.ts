import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

const handleError =(
    error : Error,
    request : Request,
    response : Response,
    next : NextFunction
) : Response =>{

    if(error instanceof AppError){
        return response.status(error.statusCode).json({message: error.message})
    }

    if(error instanceof ZodError){
        return response.status(400).json({message: error.flatten().fieldErrors})
    }

    if(error instanceof JsonWebTokenError){
        return response.status(401).json({message: error.message})
    }


    console.log(error)
    return response.status(500).json({message : "Internal Server Error"})
}

export { handleError } 