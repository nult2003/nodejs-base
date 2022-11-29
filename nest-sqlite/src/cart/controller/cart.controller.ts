import { Body, Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CartEntity } from '../cart.entity';
import { CartService } from '../service/cart.service';

@Controller('api/v1/cart')
export class CartController {
    constructor(private cartService: CartService) { }

   @UseGuards(JwtAuthGuard)
   @Post()
   async AddToCart(@Body() body, @Request() req): Promise<void> {
       const { productId, quantity } = body
       return await this.cartService.addToCart(productId, quantity, req.user.username);
   }

   @UseGuards(JwtAuthGuard)
   @Get()
   async getItemsInCart(@Request() req): Promise<CartEntity[]> {
       return await this.cartService.getItemsInCard(req.user.username);

   }
}
