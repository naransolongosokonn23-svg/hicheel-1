import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProductsService} from './products.service.js';
import {ProductsController} from './products.controller.js';
import {Product} from './products.schema.js';

@Module({
    imports:[TypeOrmModule.forFeature([Product])],
    controllers:[ProductsController],
    providers:[ProductsService],
    exports:[],
})
export class ProductsModule{}