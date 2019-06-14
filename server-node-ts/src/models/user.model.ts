import * as mongoose from 'mongoose';

export interface IUser {
    username: string,
    password: string,
    email: string,
    fullName: string,
    address?: string,
    createdDate: string | Date
}

export interface IUserModel extends IUser, mongoose.Document {
    id: string
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    address: String,
    createdDate:{
        type: Date,
        default: new Date
    }
}, {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    });
userSchema.virtual('id').get(function (this: any) {
    return this._id.toHexString();
});

export const userModel = mongoose.model<IUserModel>('user', userSchema);
