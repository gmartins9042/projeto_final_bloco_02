import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoriaEntity } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produtos"})
export class ProdutoEntity {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    name: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    description: string
    
    @IsNotEmpty()
    @Column(
        "decimal", { precision: 10, scale: 2, nullable: false })
    price: number

    @IsNotEmpty()
    @UpdateDateColumn()
    expiration_date: Date;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    manufacturer: string

    @ManyToOne(() => CategoriaEntity, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: CategoriaEntity
}