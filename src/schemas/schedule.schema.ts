import { z } from "zod";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive(),
    userId: z.number().positive()
})

const createScheduleSchema = scheduleSchema.omit({id: true, userId: true})

export {
    scheduleSchema,
    createScheduleSchema,
}