import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EliminacionService } from "./services/eliminacion.service";

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [EliminacionService], // Exportamos el servicio
    exports: []
})
export class EliminacionModule {
    constructor() {
        console.log("Módulo de Eliminación cargado");
    }
}