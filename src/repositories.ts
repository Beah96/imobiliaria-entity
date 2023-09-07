import { Repository } from "typeorm";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { AppDataSource } from "./data-source";

const userRepository : Repository<User> = AppDataSource.getRepository(User)

const scheduleRepository : Repository<Schedule> = AppDataSource.getRepository(Schedule)

const realEstateRepository : Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

const addressRespository : Repository<Address> = AppDataSource.getRepository(Address)

const categoryRespository : Repository<Category> = AppDataSource.getRepository(Category)

export {
    
    userRepository,
    scheduleRepository,
    realEstateRepository,
    addressRespository,
    categoryRespository
}