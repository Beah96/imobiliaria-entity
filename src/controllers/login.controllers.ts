import { Request, Response } from "express";
import { ILoginReturn } from "../interfaces";
import { loginService } from "../services";

const doLogin = async (
    request : Request,
    response : Response,
) : Promise<Response> => {
    
    const token : ILoginReturn = await loginService.login(request.body)

    return response.status(200).json(token)
}

export default {
    doLogin
}