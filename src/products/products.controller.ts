import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAll(): string{
        return 'getAll';
    }

    @Get(':id')
    getById(@Param('id') id: string){
        return `getById ${id}`;
    }

    @Post()
    create(){

    }

    @Delete()
    remove(){

    }

    @Put()
    update(){
        
    }
}
