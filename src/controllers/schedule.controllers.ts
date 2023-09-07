import { Request, Response } from "express";
import { scheduleServices } from "../services";

const setSchedule = async (
    request: Request,
    response: Response,
): Promise<Response> =>{

    const { userId } = response.locals

     await scheduleServices.setSchedule(userId, request.body)


    return response.status(201).json({message: "Schedule created"})
} 

const getAllSchedules =  async (
    request: Request,
    response: Response,
): Promise<Response> => {

    const allSchedules = await scheduleServices.getAllSchedules(request.params.id)

    return response.status(200).json(allSchedules)
}

export default {
    setSchedule,
    getAllSchedules
}


