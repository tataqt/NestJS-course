import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express'
import { ProductService } from './product.services/product.services.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {

    }

    @Get()
    // @Redirect('https://www.google.com/', 301)
    // getAll(@Req() requst:Request, @Res() res:Response): string {
    //     res.status(201).end('poka');
    //     return 'getAll';
    // }

    getAll(): Promise<Product[]> {
        return this.productService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Product>  {
        return this.productService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() CreateProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(CreateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Product> {
        return this.productService.remove(id);
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productService.update(id, updateProductDto);
    }
}
