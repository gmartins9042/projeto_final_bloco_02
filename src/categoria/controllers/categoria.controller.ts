import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { CategoriaEntity } from "../entities/categoria.entity";


@Controller("/categorias")
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<CategoriaEntity[]> {
        return this.categoriaService.findAll();
    }
    @Get('/name/:name')
    @HttpCode(HttpStatus.OK)
    findByAllTitulo(@Param('name') titulo: string): Promise<CategoriaEntity[]> {
        return this.categoriaService.findAllByTitulo(titulo);
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<CategoriaEntity> {
        return this.categoriaService.findById(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() categoria: CategoriaEntity): Promise<CategoriaEntity> {
        return await this.categoriaService.create(categoria)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: CategoriaEntity): Promise<CategoriaEntity> {
        return this.categoriaService.update(categoria);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.categoriaService.delete(id)
        return {message: 'Categoria deletada com Sucesso!'};
    }
}