import * as dotenv from 'dotenv';

dotenv.config();

export interface IAppConfig {
    port: number;
}

const config: IAppConfig = {
    port: +process.env.PORT || 3000,
};

export { config };
