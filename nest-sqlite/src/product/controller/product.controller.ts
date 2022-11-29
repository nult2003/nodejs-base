import { Body, Controller, Request, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductEntity } from '../product.entity';
import { ProductsService } from '../service/product/product.service';

@Controller('api/v1/products')
export class ProductController {
    constructor(private productsService: ProductsService) { }

 @UseGuards(JwtAuthGuard)
 @Get()
 async GetAll(): Promise<ProductEntity[]> {
   return await this.productsService.getAll();

 }

 @UseGuards(JwtAuthGuard)
 @Post()
 async Create(@Request() req, @Body() product: ProductEntity): Promise<ProductEntity> {
   return await this.productsService.create(product, req.user);
 }


 @UseGuards(JwtAuthGuard)
 @Get(':id')
 async GetOne(@Param() id: number): Promise<ProductEntity> {
   return await this.productsService.getOne(id);

 }

 @UseGuards(JwtAuthGuard)
 @Put(':id')
 async Update(@Param() id: number, @Body() product: ProductEntity, @Request() req): Promise<UpdateResult> {
   return await this.productsService.update(id, product, req.user);

 }

 @UseGuards(JwtAuthGuard)
 @Delete(':id')
 async Delete(@Param() id: number, @Request() req): Promise<DeleteResult> {
   return await this.productsService.delete(id, req.user);

 }
}
