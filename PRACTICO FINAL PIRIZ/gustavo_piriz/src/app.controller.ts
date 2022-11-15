import { Controller, Get,Post } from @netjs/common';
import  {AppService } from './app.service';
@Controller('api')
export class AppController 
  getHello(): any {
    

  constructor(private readonly appService: AppService) {}

  @Get()
  getZapatillas(): string {
    return this.AppService.getZapatillas();
  }
}
