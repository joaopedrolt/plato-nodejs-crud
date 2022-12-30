import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        host: process.env.MYSQL_HOST as string,
        port: parseInt(process.env.MYSQL_PORT as string) as number
    }
);