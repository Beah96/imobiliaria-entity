import { Category} from "../entities"
import { AppError } from "../error"
import { ICategoryList, ICreateCategory} from "../interfaces"
import { categoryRespository} from "../repositories"

const createCategory =async (payload : ICreateCategory) : Promise<Category>=> {

    const newCategory : Category =  categoryRespository.create(payload)
    await categoryRespository.save(newCategory)

    return newCategory
    
}

const getAllCategories =async () : Promise<ICategoryList> => {

    const categoryList : ICategoryList = await categoryRespository.find()

    return categoryList
    
}

const realEstateByCategories = async (categoryId : string) : Promise<Category> => {


    const categoryWithRE : Category | null = await categoryRespository.findOne({
        where: {id: Number(categoryId)},
        relations:{
            realEstate: true
        }
    })

    if(!categoryWithRE){
        throw new AppError("Category not found", 404)
    }

    return categoryWithRE
}

export default {
    createCategory,
    getAllCategories,
    realEstateByCategories
}