/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common';
import { ProductsService } from './products.service';
import { product } from './product.entity';


@Controller('products')
export class ProductsController {
    constructor(private readonly prodcutsService: ProductsService){}

    @Get()
    getAllProduct(): product[] {
        return this.prodcutsService.gettAllProduct();
    }

    @Get(':id')
    getproductById(@Param('id') id: string): product{
        return this.prodcutsService.getProductById(+id);
    }

    @Post()
    createProduct(@Body() product: product): product{
        return this.prodcutsService.createProduct(product);
    }
    @Put(':id')
    updateProduct(@Param('id')id: string, @Body() updateProduct: product): product{
        return this.prodcutsService.updateProduct(+id, updateProduct);
    }
    @Delete(':id')
    deleteProduct(@Param('id') id: string): product{
        return this.prodcutsService.deleteProduct(+id);
    }

}
