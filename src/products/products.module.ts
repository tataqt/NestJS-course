import { Module } from "@nestjs/common";
import { ProductService } from "./product.services/product.services.service";
import { ProductsController } from "./products.controller";

@Module({
    providers: [ProductService],
    controllers: [ProductsController]
})

export class ProductsModule{
    
}