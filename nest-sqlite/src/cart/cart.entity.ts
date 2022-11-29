import { UserEntity } from "src/auth/user.entity";
import { ProductEntity } from "src/product/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CartEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    total: number

    @Column()
    quantity: number

    @ManyToOne(type => ProductEntity, order => order.id)
    @JoinColumn()
    item: ProductEntity

    @ManyToOne(type => UserEntity, user => user.username)
    @JoinColumn()
    user: UserEntity
}
