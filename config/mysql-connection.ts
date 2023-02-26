import mysql from "mysql2/promise"

const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    ssl: {"rejectUnauthorized":true},
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
};

export const getConnection  = async () => {
    try {
        const connection = await mysql.createPool(mysqlConfig);
        return connection;    
    } catch (error) {
        console.error(error);
    }
}