export * from './user.repository';

// Import Repository
import { UserRepository } from './user.repository';

// Import IRepository

import { IUserRepository } from '../interfaces/IRepositories';


export class DBContext {
    private static instance: DBContext;
    private user: IUserRepository;
    private constructor() {
        this.user = new UserRepository();
    }
    public static getInstance() {
        if (!DBContext.instance) {
            DBContext.instance = new DBContext();
        }
        return DBContext.instance;
    }

    getUser() {
        return this.user;
    }
}
export const DBContextSingleton = DBContext.getInstance();