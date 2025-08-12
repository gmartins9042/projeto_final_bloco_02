import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { ProdutoEntity } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private produtoRepository: Repository<ProdutoEntity>
    ) { }

    async findAll(): Promise<ProdutoEntity[]> {
        return await this.produtoRepository.find({
            relations: {
                categoria: true
            }
        });
    }

    async findById(id: number): Promise<ProdutoEntity> {

        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        });

        if (!produto)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

        return produto;
    }

    async findAllByDescricao(descricao: string): Promise<ProdutoEntity[]> {
        return await this.produtoRepository.find({
            where: {
               description: ILike(`%${descricao}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    async create(produto: ProdutoEntity): Promise<ProdutoEntity> {
        return await this.produtoRepository.save(produto);
    }

    async update(produto: ProdutoEntity): Promise<ProdutoEntity> {

        await this.findById(produto.id);

        return await this.produtoRepository.save(produto)
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.produtoRepository.delete(id);

    }

}