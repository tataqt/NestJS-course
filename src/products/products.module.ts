import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductService } from "./product.services/product.services.service";
import { ProductsController } from "./products.controller";
import { PoductSchema, Product } from "./schemas/product.schema";

@Module({
    providers: [ProductService],
    controllers: [ProductsController],
    imports: [
        MongooseModule.forFeature([{
            name: Product.name,
            schema: PoductSchema
        }])
    ]
})

export class ProductsModule {

}