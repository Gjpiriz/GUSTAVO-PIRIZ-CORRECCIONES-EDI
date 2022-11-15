import { AppService } from "./app.service";
import { Controller, Get,Post } from '@nestjs/common';

//El nombre del archivo tiene que ser el mismo de la clase, no 
//deberias ponerle Zapatillas controler si el archivo se llama app.controller
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getZapatillas(): string {
    return this.appService.getZapatillas();
  }
}
