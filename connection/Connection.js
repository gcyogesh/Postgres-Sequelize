import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('firsttrypostgre', 'root', 'password', {           //dbName, username, pass
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});




export const Connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log("Database & tables created successfully");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default sequelize;
