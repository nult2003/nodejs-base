import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ObjectionModule.register({
      config:{
        client: 'pg',
        useNullAsDefault: true,
        connection:{
          host:'127.0.0.1',
          port:5432,
          user: 'postgres',
          password:'postgres',
          database: 'nest-respository-pattern'
        }
      }
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
