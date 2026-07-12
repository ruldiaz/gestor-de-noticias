import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgregacionService } from "./services/agregacion.service";

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [AgregacionService], // Exportamos el servicio
    exports: []
})
export class AgregacionModule {
    constructor() {
        console.log("Módulo de Agregación cargado")
    }
}