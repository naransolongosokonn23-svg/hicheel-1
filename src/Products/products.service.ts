import {Injectable} from '@nestjs/common';

@Injectable()
export class ProductsService{
    gethello():string{
        const App = 'Etugen'
        return 'Hello from ' + "" + App;
    }
}                                                                                                                                