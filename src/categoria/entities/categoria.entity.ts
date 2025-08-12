import { IsBoolean, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'tb_farmacia' })
export class CategoriaEntity {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({
        length: 100, nullable: true 
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
}