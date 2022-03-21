import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductModule } from './products/products.module';
import config from './config/keys';
@Module({
  imports: [ProductModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
