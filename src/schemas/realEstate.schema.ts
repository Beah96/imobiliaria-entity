import { z } from "zod";

const realEstateSchema = z.object({
    id: z.number().positive(),
    value: z.number().or(z.string()).default(0),
    size: z.number().positive().int(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive().int(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().positive(),
    sold: z.boolean().default(false),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date())
})

const createRealEstateSchema = realEstateSchema.omit({id: true, sold: true, createdAt: true, updatedAt: true})

const realEstateListSchema = realEstateSchema.array()

export {
    realEstateSchema,
    realEstateListSchema,
    createRealEstateSchema
}

