import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoEntity } from "./entities/produto.entity";
import { ProdutoController } from "./controller/produto.controller";
import { ProdutoService } from "./services/produto.service";


@Module({
    imports: [TypeOrmModule.forFeature([ProdutoEntity])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [ProdutoService]
})
export class ProdutoModule {}