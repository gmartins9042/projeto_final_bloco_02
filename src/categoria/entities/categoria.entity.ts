import { IsBoolean, IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProdutoEntity } from "../../produto/entities/produto.entity";


@Entity({ name: 'categoria' })
export class CategoriaEntity {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({
        length: 100
    })
    name: string;

    @IsNotEmpty()
    @Column({
        length: 255, nullable: true
    })
    description: string;

    @IsNotEmpty()
    @Column({ default: false })
    requiresPrescription: boolean;

    @IsNotEmpty()
    @Column({ default: true })
    active: boolean;

    @IsNotEmpty()
    @Column({ type: 'int', nullable: false })
    unit: number;

    @OneToMany(() => ProdutoEntity, (produto) => produto.categoria)

    produto: ProdutoEntity[]
}