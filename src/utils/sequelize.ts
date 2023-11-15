import { Sequelize, Dialect } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });


export const sequelize = new Sequelize(process.env.DATABASE!, process.env.DATABASE_USER!, process.env.DATABASE_PASSWORD, {
    host: process.env.HOST!,
    dialect: process.env.DIALECT! as Dialect, // Adjust the dialect based on your database
});

export async function connectToDatabase(): Promise<void> {
    try {
        await sequelize.authenticate().then(async () => {
            (async () => {
                await sequelize.sync({ alter: true });
                // await doStuffWithUser();
            })();
        });
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
