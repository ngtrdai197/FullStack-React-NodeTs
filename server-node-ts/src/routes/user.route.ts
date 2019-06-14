import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { constants } from '../constants';
import { userController } from '../controllers';

export const userRouter = express.Router();

const create = (req: Request, res: Response) => {
    userController.create(req).then(response => {
        return res.send(response);
    }).catch(error => {
        return res.status(error.status).send({
            statusCode: error.status || 500,
            error: error.message
        })
    });
};

const findById = (req: Request, res: Response) => {
    userController.findById(req).then(response => {
        return res.send(response);
    }).catch(error => {
        return res.status(error.status).send({
            statusCode: error.status || 500,
            error: error.message
        })
    });
}

userRouter.route('/').post(create);
userRouter.route('/:id').get(findById);
