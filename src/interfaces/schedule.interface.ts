import { z } from "zod";
import { createScheduleSchema } from "../schemas/schedule.schema";

type IScheduleCreate = z.infer<typeof createScheduleSchema>

export {
    IScheduleCreate
}