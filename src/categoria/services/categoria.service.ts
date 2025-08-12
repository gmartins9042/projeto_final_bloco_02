import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaEntity } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(CategoriaEntity)
        private categoriaRepository: Repository<CategoriaEntity>
    ) { }

    async findAll(): Promise<CategoriaEntity[]> {
        return await this.categoriaRepository.find();
    }
    async findById(id: number): Promise<CategoriaEntity> {
        const categoria = await this.categoriaRepository.findOne({
            where: {
                id
            }
        });

        if (!categoria)
            throw new HttpException('Id não encontrado !', HttpStatus.NOT_FOUND);
        return categoria
    }
    async findAllByTitulo(titulo: string): Promise<CategoriaEntity[]> {
        return await this.categoriaRepository.find({
            where: {
                name: ILike(`%${titulo}%`)
            }
        })
    }
    async create(categoria: CategoriaEntity): Promise<CategoriaEntity> {
        return await this.categoriaRepository.save(categoria);
    }
    async uptade(categoria: CategoriaEntity): Promise<CategoriaEntity> {

        await this.findById(categoria.id)

        return await this.categoriaRepository.save(categoria)
    }
    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id)

        return await this.categoriaRepository.delete(id)
    }

}