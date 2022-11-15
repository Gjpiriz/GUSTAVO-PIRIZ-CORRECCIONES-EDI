import { Controller, Get, Post} from '@nestjs/common';
import { ZapatillasService } from './zapatillas.service';

@Controller('zapatillas')
export class ZapatillasController {
    constructor(private readonly zapatillasService: ZapatillasService){}

    //Tanto el Get como el Post los habias puesto con Mayusculas
    @Get()    
    getZapatillas(): string {
        return this.zapatillasService.getZapatillas();
    }

    @Post()  
    postZapatillas(): string {
        return this.zapatillasService.postZapatillas();
    }
}


































