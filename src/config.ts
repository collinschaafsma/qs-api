import * as dotenv from 'dotenv';

dotenv.config();

export interface AppConfig {
    port: number;
}

const config: AppConfig = {
    port: +process.env.PORT || 3000,
};

export { config };
