import { IUser } from "models/user.model";

export interface IUserRepository {
    create(user: IUser): Promise<IUser>;
    findById(id: string): Promise<IUser>;
    findOne(query: any): Promise<IUser>;
}