import { userSchema, createUserSchema, updateSchema, userReturn, 
    userListschema } from "./user.schema";
import { loginSchema } from "./login.schema";
import { categorySchema, categoryListSchema, createCategorySchema } from "./category.schema";
import { realEstateListSchema, realEstateSchema,createRealEstateSchema } from "./realEstate.schema";
import { scheduleSchema, createScheduleSchema} from "./schedule.schema";

export default {
    userSchema,
    updateSchema,
    createUserSchema,
    userReturn, 
    userListschema, 
    loginSchema,
    categorySchema, 
    categoryListSchema, 
    createCategorySchema,
    realEstateListSchema, 
    realEstateSchema,
    createRealEstateSchema,
    scheduleSchema, 
    createScheduleSchema
}