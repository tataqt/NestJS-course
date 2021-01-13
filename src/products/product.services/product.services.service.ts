import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product, ProductDocument } from '../schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {

    }

    private products = [];

    getAll() {
        return this.products;
    }

    getById(id) {
        return this.products.find(p => p.id === id)
    }

    create(productDto: CreateProductDto) {
        this.products.push({
            ...productDto,
            id: Date.now().toString()
        })
    }
}
