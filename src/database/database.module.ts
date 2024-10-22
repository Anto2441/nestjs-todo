import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/connect';

import databaseConfig from './database.config';
import { DATABASE } from './database.constants';

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
  providers: [
    {
      provide: DATABASE,
      useFactory: (
        databaseConfiguration: ConfigType<typeof databaseConfig>,
      ) => {
        return drizzle('node-postgres', databaseConfiguration);
      },
      inject: [databaseConfig.KEY],
    },
  ],
  exports: [DATABASE],
})
export class DatabaseModule {}
