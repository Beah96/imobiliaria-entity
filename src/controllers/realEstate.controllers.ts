import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateService } from "../services";


const createRealEstate = async (
    request : Request,
    response : Response,
) : Promise<Response> =>{

    const newRealState : RealEstate | null = await realEstateService.createRealEstate(request.body)
    

    return response.status(201).json(newRealState)

}

const getRealEstates = async (
    request : Request,
    response : Response,
) : Promise<Response> =>{

    const realEstateList: RealEstate[] = await realEstateService.getAllRealEstate() 

    return response.status(200).json(realEstateList)
}

export default {
    createRealEstate,
    getRealEstates
}