import { CartEntity } from "src/cart/cart.entity";
import { OrderEntity } from "src/order/order.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    role: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToMany(type => CartEntity, cart => cart.id)
    @JoinColumn()
    cart: CartEntity[]

    @OneToOne(type => OrderEntity, order => order.id)
    @JoinColumn()
    order: OrderEntity;
}
