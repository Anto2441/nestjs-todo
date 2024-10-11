import { registerAs } from '@nestjs/config';

export default registerAs('todos', () => ({
  database: {
    port: parseInt(process.env.DATABASE_PORT),
  },
}));
