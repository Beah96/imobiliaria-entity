import { Address, Category, RealEstate } from "../entities"
import { IRealEstateCreate } from "../interfaces"
import { addressRespository, categoryRespository, realEstateRepository } from "../repositories"

const createRealEstate =async (payload : IRealEstateCreate) : Promise<RealEstate | null>=> {

    const fuckingCategory = await categoryRespository.findOne({where: { id: payload.categoryId}})

    const{ address } = payload

    const newAddress : Address = addressRespository.create(address)
    await addressRespository.save(newAddress)


    const newRealState : RealEstate = realEstateRepository.create({...payload,category: fuckingCategory!, address: newAddress})
    await realEstateRepository.save(newRealState)

    const realStateWithAddress : RealEstate | null = await realEstateRepository.findOne({
        where: {id: newRealState.id},
        relations:{
            category:true,
            address: true
        }
    })

    return realStateWithAddress
    
}

const getAllRealEstate =async () : Promise<RealEstate[]> => {
    const realEstateList : RealEstate[] = await realEstateRepository.find({
        relations:{
            address:true
        }
    })

    return realEstateList
}

export default{
    createRealEstate,
    getAllRealEstate
}