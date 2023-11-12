import { Sequelize, Dialect } from 'sequelize';

export const sequelize = new Sequelize(process.env.DATABASE!, process.env.DATABASE_USER!, process.env.DATABASE_PASSWORD, {
    host: process.env.HOST!,
    dialect: process.env.DIALECT as Dialect, // Adjust the dialect based on your database
});

export async function connectToDatabase(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
