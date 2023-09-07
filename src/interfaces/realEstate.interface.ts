import { z } from "zod";
import { createRealEstateSchema, realEstateSchema } from "../schemas/realEstate.schema";


type IRealEstate = z.infer<typeof realEstateSchema>

type IRealEstateCreate = z.infer<typeof createRealEstateSchema>

type IRealEstateList = IRealEstate[]

export {
    IRealEstate,
    IRealEstateList,
    IRealEstateCreate
}