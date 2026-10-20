import {Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.schema.js';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dto.js'

@Injectable()
export class ProductsService {
constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
) {}
create(dto: CreateProductDto): Promise<Product> {
    const products = this.productsRepository.create(dto);
    return this.productsRepository.save(products);
}
findAll(): Promise<Product[]> {
    return this.productsRepository.find();
}
async findOne(id: number): Promise<Product> {
    const products = await this.productsRepository.findOne({ where: { id } });
    if (!products) {
        throw new NotFoundException(`Products #${id} not found`);
    }
    return products;
}
    async update(id: number, dto: UpdateProductDto): Promise<Product> {
    const products = await this.findOne(id);
    Object.assign(products, dto);
    return this.productsRepository.save(products);
    }
    async remove(id: number): Promise<void> {
        const products = await this.findOne(id);
        await this.productsRepository.remove(products);
    }
getHello(): string {
    const App = "Etugen"
    return 'Hello World! ' + "" + App;
}
}