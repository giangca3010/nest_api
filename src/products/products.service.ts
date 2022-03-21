import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>
    ){}

    insertProduct(title: string, desc: string, price: number) {
        const proId = Math.random().toString();
        const newProduct = new this.productModel(proId, title, desc, price);
        this.products.push(newProduct);
        // return proId;
    }
}