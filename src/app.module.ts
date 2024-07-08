import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersController } from './members/members.controller';

@Module({
  imports: [],
  controllers: [AppController, MembersController],
  providers: [AppService],
})
export class AppModule {}
