import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderEntity } from '../order.entity';
import { OrderService } from '../service/order.service';

@Controller('api/v1/order')
export class OrderController {
    constructor(private orderService: OrderService) { }


   @UseGuards(JwtAuthGuard)
   @Post()
   async order(@Request() req): Promise<any> {
       return this.orderService.order(req.user.username)
   }

   @UseGuards(JwtAuthGuard)
   @Get()
   async getOrders(@Request() req): Promise<OrderEntity[]> {
       return await this.orderService.getOrders(req.user.username)
   }
}
