import { ProductsService } from './products.service.js';
import { UpdateProductDto, CreateProductDto } from '../dto/products.dto.js';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(dto: CreateProductDto): Promise<import("./products.schema.js").Product>;
    findAll(): Promise<import("./products.schema.js").Product[]>;
    findOne(id: number): Promise<import("./products.schema.js").Product>;
    update(id: number, dto: UpdateProductDto): Promise<import("./products.schema.js").Product>;
    remove(id: number): Promise<void>;
    getHello(): string;
}
