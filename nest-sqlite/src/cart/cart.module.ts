import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
import { CartEntity } from './cart.entity';
import { CartService } from './service/cart.service';
import { CartController } from './controller/cart.controller';
import { ProductsService } from 'src/product/service/product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, UserEntity])],
  providers: [CartService, ProductsService],
  controllers: [CartController]
})
export class CartModule {}
