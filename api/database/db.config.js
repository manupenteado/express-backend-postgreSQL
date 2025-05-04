import dotenv from 'dotenv';
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const dbConfig = process.env.DATABASE_URL
  ? {
      url: process.env.DATABASE_URL,
      dialect: "postgres",
      dialectOptions: {
        ssl: isProduction ? { require: true, rejectUnauthorized: false } : false,
      },
      pool: {
        max: 2,
        min: 0,
        acquire: 3000,
        idle: 0,
        evict: 8000,
      },
    }
  : {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      port: process.env.POSTGRES_PORT,
      dialect: "postgres",
      dialectOptions: {
        ssl: isProduction ? { require: true, rejectUnauthorized: false } : false,
      },
      pool: {
        max: 2,
        min: 0,
        acquire: 3000,
        idle: 0,
        evict: 8000,
      },
    };

export default dbConfig;