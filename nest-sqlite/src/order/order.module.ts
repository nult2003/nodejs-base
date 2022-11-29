import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { CartEntity } from 'src/cart/cart.entity';
import { ProductEntity } from 'src/product/product.entity';
import { OrderEntity } from './order.entity';
import { OrderService } from './service/order.service';
import { OrderController } from './controller/order.controller';
import { CartService } from 'src/cart/service/cart.service';
import { ProductsService } from 'src/product/service/product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, UserEntity])],
  controllers: [OrderController],
  providers: [OrderService, CartService, ProductsService]
})
export class OrderModule {}
