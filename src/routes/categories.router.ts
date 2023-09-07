import { Router } from "express";
import middleware from "../middleware";
import { createCategorySchema } from "../schemas/category.schema";
import { categoryControllers } from "../controllers";

const categoriesRouter : Router = Router()

categoriesRouter.post("",
    middleware.verifyToken,
    middleware.verifyIsAdm,
    middleware.verifyCategory,
    middleware.validateBody(createCategorySchema),
    categoryControllers.createCategory
    
)
categoriesRouter.get("",
    categoryControllers.getAllCategories
)

categoriesRouter.get("/:id/realEstate",
    categoryControllers.getREByCategory
)


export default  categoriesRouter