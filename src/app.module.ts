import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import 'dotenv/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URI), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
