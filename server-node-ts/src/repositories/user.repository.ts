import { IUserRepository } from "../interfaces/IRepositories";
import { IUser, userModel } from "../models/user.model";

export class UserRepository implements IUserRepository {
    create = async (user: IUser): Promise<IUser> => {
        return await userModel.create(user);
    }
    
    findById = async (id: string): Promise<IUser> => {
        return await userModel.findById(id);
    }

    findOne = async (query: any): Promise<IUser> => {
        return await userModel.findOne(query);
    }
}