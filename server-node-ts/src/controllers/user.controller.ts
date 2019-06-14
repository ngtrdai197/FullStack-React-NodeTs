import { IUserService } from "../interfaces/IServices";
import { UserServiceInstance } from "../services";
import * as mongoose from 'mongoose';
import { IUser } from "models";
import * as createError from 'http-errors';
import { constants } from "../constants";

export class UserController {
    private static instance: UserController;
    private userService: IUserService;

    private constructor() {
        this.userService = UserServiceInstance;
    }
    public static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }

    create = async (req: any) => {
        try {
            const newUser = req.body;
            let query: any = {
                username: (newUser as IUser).username
            };
            const checkUserByUsername = await this.userService.findOne(query);
            if (checkUserByUsername) throw createError(400, constants.USER.USERNAME_EXIST);

            query = {
                email: (newUser as IUser).email
            };
            const checkUserByEmail = await this.userService.findOne(query);
            if (checkUserByEmail) throw createError(400, constants.USER.EMAIL_EXIST);

            return await this.userService.create(newUser as IUser);
        } catch (error) {
            throw error;
        }
    }

    findById = async (req: any) => {
        try {
            const checkObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
            if (!checkObjectId) throw createError(400, constants.ObjectID);
            return await this.userService.findById(req.params.id);
        } catch (error) {
            throw error;
        }
    }

}

export const userController = UserController.getInstance();