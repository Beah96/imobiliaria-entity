import { z } from "zod";

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string()
})

const createCategorySchema = categorySchema.omit({id: true})
const categoryListSchema = categorySchema.array()

export {
    categorySchema,
    createCategorySchema,
    categoryListSchema
}