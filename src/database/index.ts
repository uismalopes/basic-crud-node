import "reflect-metadata";
import { DataSource } from "typeorm";

const IS_PROD = process.env.DATABASE_FILE === 'production';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_FILE || './database.sqlite',
  entities: ['src/database/entity/**/*.ts'], 
  migrations: ['src/database/migration/**/*.ts'],
  synchronize: !IS_PROD,
  logging: !IS_PROD,
});

AppDataSource.initialize()
  .then(() => {
    console.log(`🔥 Database initialized`);
  })
  .catch((error) => {
    console.error('❌ Error during Data Source initialization', error);
    process.exit(1);
  });
