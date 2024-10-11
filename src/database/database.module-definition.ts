import { ConfigurableModuleBuilder } from '@nestjs/common';

export const {
  ConfigurableModuleClass: ConfigurableDatabaseModule,
  MODULE_OPTIONS_TOKEN: DATABASE_MODULE_OPTIONS_TOKEN,
} = new ConfigurableModuleBuilder().setClassMethodName('forRoot').build();
