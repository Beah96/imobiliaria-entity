import { RealEstate, Schedule } from "../entities"
import { AppError } from "../error"
import { IScheduleCreate } from "../interfaces"
import { realEstateRepository, scheduleRepository } from "../repositories"

const setSchedule =async (userId: string, payload : IScheduleCreate) : Promise<Schedule> => {

    const newPayload = { ... payload, userId: userId}

    const newSchedule : Schedule = scheduleRepository.create(newPayload)

    await scheduleRepository.save(newSchedule)

    return newSchedule
    
}

const getAllSchedules =async (id : string) : Promise<RealEstate | object> => {

        const allSchedules : RealEstate | null = await realEstateRepository.findOne({
            where: { id: Number(id) },
            relations:{
                address: true,
                category: true,
                schedules:{
                        user: true
                    }
            }
        })

        if(!allSchedules){
         throw new AppError("RealEstate not found", 404)
        }

        return allSchedules
    
}

export default {
    setSchedule,
    getAllSchedules
}