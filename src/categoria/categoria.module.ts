import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaEntity } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";
import { CategoriaController } from "./controllers/categoria.controller";

@Module({
    imports: [TypeOrmModule.forFeature([CategoriaEntity])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [],
})
export class CategoriaModule {}