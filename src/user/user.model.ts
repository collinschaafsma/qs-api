import { Document, Model, model, Schema } from 'mongoose';

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
        required: true,
        type: String,
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

// userSchema.static('createUser', (user: IUser) => {
//     const hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
//     user.password = hash;
//     user.save();
// });

export const User: Model<IUser> = model<IUser>('User', userSchema);
