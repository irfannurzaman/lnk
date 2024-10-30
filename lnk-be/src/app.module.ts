import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    AuthModule,
    UserModule,
    EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
