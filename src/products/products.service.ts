/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {product} from './product.entity';

@Injectable()
export class ProductsService {
    private products : product [] = [];

    gettAllProduct(): product[] {
        return this.products;
    }
    getProductById(id: number): product {
        return this.products.find((product) => product.id === id);
    }
    createProduct(product: product): product {
        product.id = this.products.length +1;
        this.products.push(product);
        return product;
    }
    updateProduct(id: number, updateProduct: product): product {
      const index = this.products.findIndex((product) => product.id === id);
      if(index !== -1) {
        this.products[index] = {...this.products[index], ...updateProduct}
        return this.products[index];
      }
      return null;
    }
    deleteProduct (id: number): product {
        const index = this.products.findIndex((product) => product.id === id);
        if(index!== -1) {
            const deleteProduct = this.products.splice(index, 1) [0];
            return deleteProduct;
        }
        return null;
    }
}
