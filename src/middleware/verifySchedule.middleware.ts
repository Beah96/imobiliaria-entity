import { NextFunction, Request, Response } from "express"
import { RealEstate, Schedule } from "../entities"
import { realEstateRepository, scheduleRepository } from "../repositories"
import { AppError } from "../error"

const verifySchedule =async ( 
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> =>{

    const { date, hour, realEstateId } = request.body
    const { sub } = response.locals.decoded

    const day = new Date(date).getDay()
    const time = hour.split(":")[0]

    if(day == 0 || day == 6){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }

    if(time < 8 || time > 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    const checkSchedule : Schedule | null = await scheduleRepository.findOne({
        where:{
            date: date,
            hour: hour,
            realEstate: realEstateId
        },
        relations:{
            user: true
        }
    })

    
    if(checkSchedule && checkSchedule.user.id == sub){
            throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    } 
    
    if (checkSchedule && checkSchedule.user.id !== sub){
       
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }     

    const checkReaLEstate : RealEstate | null = await realEstateRepository.findOne({
        where:{ id : Number(request.body.realEstateId)}
    })

    if(!checkReaLEstate){
        throw new AppError("RealEstate not found", 404)
    }


    return next()
}

export { verifySchedule }