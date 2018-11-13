import * as bcrypt from 'bcryptjs';
import { Document, Model, model, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name: string;
    password?: string;
}

export interface IUserModel {
    // createUser(user: IUser, callback: Function): void
    comparePassword(candidatePassword: string, hash: string, callback: Function): void
    findByEmail(email: string, callback: Function): void
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

// userSchema.static('createUser', (user: IUser, callback: Function) => {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             if (err) { throw err; }
//             user.password = hash;
//             user.save(callback);
//         });
//     });
// });

userSchema.static('comparePassword', (candidatePassword: string, hash: string, callback: Function) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) { throw err; }
        callback(null, isMatch);
    });
});

userSchema.static('findByEmail', (email: string, callback: Function) => {
    User.findOne({email: email}, callback);
});

export type UserModel = Model<IUser> & IUserModel & IUser;

export const User: UserModel = <UserModel>model<IUser>('User', userSchema);
