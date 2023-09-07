import { Request, Response } from "express";
import { Category } from "../entities";
import { categoryService } from "../services";
import { ICategoryList } from "../interfaces";

const createCategory = async (
    request : Request,
    response : Response,
) : Promise<Response> => {

    const newCategory : Category = await categoryService.createCategory(request.body)

    return response.status(201).json(newCategory)
}

const getAllCategories = async (
    request : Request,
    response : Response,
) : Promise<Response> => {

    const categoryList : ICategoryList = await categoryService.getAllCategories()

    return response.status(200).json(categoryList)

}

const getREByCategory = async (
    request : Request,
    response : Response,
) : Promise<Response> =>{

    const categoryId = request.params.id
    const categoryWithRE : Category = await categoryService.realEstateByCategories(categoryId)

    return response.status(200).json(categoryWithRE)
}

export default{
    createCategory,
    getAllCategories,
    getREByCategory
}