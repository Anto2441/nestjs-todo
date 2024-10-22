import { registerAs } from '@nestjs/config';
import * as databaseSchema from './database.schema';

export default registerAs('database', () => ({
  connection: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
  schema: databaseSchema,
  casing: 'snake_case' as const,
}));
