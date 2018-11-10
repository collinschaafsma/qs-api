import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
    port: number;
    databaseUrl: string;
}

const config: IConfig = {
    databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/qs',
    port: +process.env.PORT || 3000,
};

export { config };
