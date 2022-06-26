import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyGqlResolver } from './my-gql/my-gql.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MyGqlResolver],
})
export class AppModule {}
