import { Document, Model, model, Schema } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export interface IUser extends Document {
    email: string;
    name: string;
    password: string;
}

export const userSchema: Schema = new Schema({
    createdAt: {
        default: Date.now(),
        type: Date,
    },
    email: {
        index: true,
        required: true,
        type: String,
        unique: true,
        uniqueCaseInsensitive: true,
    },
    name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    updatedAt: {
        default: Date.now(),
        type: Date,
    },
});

userSchema.plugin(uniqueValidator);

export const User: Model<IUser> = model<IUser>('User', userSchema);
