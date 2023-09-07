import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../error";
import { ILogin, ILoginReturn } from "../interfaces";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";

const login = async ({email, password} : ILogin): Promise<ILoginReturn> =>{


    const loginUser : User | null = await userRepository.findOneBy({email})

    if(!loginUser){
        throw new AppError("Invalid credentials", 401)
    }

    const samePassword : boolean = await compare(password, loginUser.password)

    if(!samePassword){
        throw new AppError("Invalid credentials", 401)
    }

    const token : string = sign(
        {id: loginUser.id, admin: loginUser.admin},
        process.env.SECRET_KEY!,
        {subject: loginUser.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    )
    return { token }

}

export default {
    login    
}