import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>){

    }

    async getAll(): Promise<ProductEntity[]>{
        return await this.productRepository.find()
    }

    async create(product: ProductEntity, user: UserEntity): Promise<ProductEntity> {
        if(user.role == 'admin'){
            return await this.productRepository.save(product);
        }

        throw new UnauthorizedException();
    }

    async getOne(id: number): Promise<ProductEntity>{
        return this.productRepository.findOne({where: {id: id}});
    }

    async update(id: number, product: ProductEntity, user: UserEntity): Promise<UpdateResult> {
        if (user.role == 'admin') {
            return await this.productRepository.update(id, product);
        }
        throw new UnauthorizedException();
    }

    async delete(id: number, user: UserEntity): Promise<DeleteResult> {
        if (user.role == 'admin') {
            return await this.productRepository.delete(id);
        }
        throw new UnauthorizedException();
    }
}
