import { IUserService } from "../interfaces/IServices";
import { IUser } from "../models";
import { IUserRepository } from "../interfaces/IRepositories";
import { DBContextSingleton } from "../repositories";

export class UserService implements IUserService {
    private static instance: UserService;
    private userRepository: IUserRepository;

    private constructor() {
        this.userRepository = DBContextSingleton.getUser();
    }
    public static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    create = async (user: IUser): Promise<IUser> => {
        return await this.userRepository.create(user);
    }

    findById = async (id: string): Promise<IUser> => {
        return await this.userRepository.findById(id);
    }
    
    findOne = async (query: any): Promise<IUser> => {
        return await this.userRepository.findOne(query);
    }
}

export const UserServiceInstance = UserService.getInstance();