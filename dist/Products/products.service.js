"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_schema_js_1 = require("./products.schema.js");
let ProductsService = class ProductsService {
    productsRepository;
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    create(dto) {
        const products = this.productsRepository.create(dto);
        return this.productsRepository.save(products);
    }
    findAll() {
        return this.productsRepository.find();
    }
    async findOne(id) {
        const products = await this.productsRepository.findOne({ where: { id } });
        if (!products) {
            throw new common_1.NotFoundException(`Products #${id} not found`);
        }
        return products;
    }
    async update(id, dto) {
        const products = await this.findOne(id);
        Object.assign(products, dto);
        return this.productsRepository.save(products);
    }
    async remove(id) {
        const products = await this.findOne(id);
        await this.productsRepository.remove(products);
    }
    getHello() {
        const App = "Etugen";
        return 'Hello World! ' + "" + App;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_schema_js_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map