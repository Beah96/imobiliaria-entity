import { User } from "../entities"
import { IUserCreate, IUserUpdate } from "../interfaces"
import { userRepository } from "../repositories"

const createUser = async (payload : IUserCreate) : Promise<User> => { 
    
    const user : User = userRepository.create(payload)

    await userRepository.save(user)

    return user
}

const getUsersList =async () : Promise<User[]> => {
    return await userRepository.find()
}

const updateUser =async (user: User, payload : IUserUpdate) : Promise<User> => {

   return await userRepository.save({...user, ...payload})
}

const deleteUser =async (user: User) : Promise<void> => {
    await userRepository.remove(user)
}

export default{
    createUser,
    getUsersList,
    updateUser,
    deleteUser
}