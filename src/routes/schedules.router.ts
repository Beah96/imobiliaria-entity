import { Router } from "express";
import middleware from "../middleware";
import { createScheduleSchema } from "../schemas/schedule.schema";
import { scheduleControllers } from "../controllers";

const scheduleRouter : Router = Router()

scheduleRouter.post("",
    middleware.verifyToken,
    middleware.validateBody(createScheduleSchema),
    middleware.verifySchedule,
    scheduleControllers.setSchedule
)
scheduleRouter.get("/realEstate/:id",
    middleware.verifyToken,
    middleware.verifyIsAdm,
    middleware.verifyRealEstate,
    scheduleControllers.getAllSchedules
)

export default scheduleRouter