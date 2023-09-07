import { z } from "zod";
import { categoryListSchema, categorySchema, createCategorySchema } from "../schemas/category.schema";


type ICategory = z.infer<typeof categorySchema>
type ICategoryList = z.infer<typeof categoryListSchema>
type ICreateCategory = z.infer<typeof createCategorySchema>

export{
    ICategory,
    ICategoryList,
    ICreateCategory
}