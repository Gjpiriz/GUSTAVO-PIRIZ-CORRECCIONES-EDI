"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const module_1 = require();
/common';;
const app_service_1 = require("./app.service");
let AppController = class AppController {
};
AppController = __decorate([
    (0, module_1.Controller)('api')
], AppController);
exports.AppController = AppController;
getHello();
any;
{
    constructor(private, readonly, appService, app_service_1.AppService);
    { }
    getZapatillas();
    string;
    {
        return this.AppService.getZapatillas();
    }
}
//# sourceMappingURL=app.controller.js.map