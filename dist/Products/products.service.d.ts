import { Repository } from 'typeorm';
import { Product } from './products.schema.js';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dto.js';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    create(dto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, dto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
    getHello(): string;
}
