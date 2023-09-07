import { Router } from "express";
import middleware from "../middleware";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { realEstateControllers } from "../controllers";

const realEstateRouter : Router = Router()

realEstateRouter.post("",
    middleware.verifyToken,
    middleware.verifyIsAdm,
    middleware.validateBody(createRealEstateSchema),
    middleware.verifyAddress,
    middleware.verifyCategoryId,
    realEstateControllers.createRealEstate
)

realEstateRouter.get("",
    realEstateControllers.getRealEstates
)

export default realEstateRouter