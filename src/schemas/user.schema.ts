import { z } from "zod";

const userSchema = z.object({
    id: z.number().positive(), 
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false) ,
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
})

const createUserSchema = userSchema.omit({id: true, createdAt: true, updatedAt: true, deletedAt: true})

const updateSchema = userSchema.omit({id: true, admin:true}).partial()

const userReturn = userSchema.omit({password: true})

const userListschema = userReturn.array()

export { 
    userSchema,
    createUserSchema,
    updateSchema,
    userReturn, 
    userListschema
}
