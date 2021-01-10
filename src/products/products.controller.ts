import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UprdateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express'
import { ProductService } from './product.services/product.services.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService){

    }

    @Get()
    // @Redirect('https://www.google.com/', 301)
    // getAll(@Req() requst:Request, @Res() res:Response): string {
    //     res.status(201).end('poka');
    //     return 'getAll';
    // }

    getAll(){
        return this.productService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.productService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() CreateProductDto: CreateProductDto) {
        return this.productService.create(CreateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Remove + ${id}`;
    }

    @Put(':id')
    update(@Body() updateProductDto: UprdateProductDto, @Param('id') id: string) {
        return `Update + ${id}`;
    }
}
