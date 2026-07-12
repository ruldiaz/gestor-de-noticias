import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EdicionService } from "./services/edicion.service";

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [EdicionService], // Exportamos el servicio
    exports: []
})
export class EdicionModule {
    constructor() {
        console.log("Módulo de Edición cargado");
    }
}