import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
    port: number;
}

const config: IConfig = {
    port: +process.env.PORT || 3000,
};

export { config };
