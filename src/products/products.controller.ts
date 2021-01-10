import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UprdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    @Get()
    getAll(): string {
        return 'getAll';
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return `getById ${id}`;
    }

    @Post()
    create(@Body() CreateProductDto: CreateProductDto): string {
        return `Title = ${CreateProductDto.title}
                Price = ${CreateProductDto.price}`;
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return `Remove + ${id}`;
    }

    @Put(':id')
    update(@Body() updateProductDto: UprdateProductDto, @Param('id') id:string) {
        return `Update + ${id}`;
    }
}
