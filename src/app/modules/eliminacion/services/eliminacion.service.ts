import { Injectable } from "@angular/core";
import { NoticiaService } from "../../../services/noticia.service";

@Injectable({
    providedIn: 'root'
})
export class EliminacionService {
    constructor(private noticiaService: NoticiaService) {}

    /**
     * Módulo de eliminación: Elimina una noticia por su ID
     * @param id ID de la noticia a eliminar
     * @returns true si se eliminó correctamente, false si no se encontró
     */
    eliminarNoticia(id: number): boolean {
        return this.noticiaService.eliminarNoticia(id);
    }

    /**
     * Verifica si existe una noticia con el ID dado
     * @param id ID de la noticia
     * @returns true si existe, false si no
     */
    existeNoticia(id: number): boolean {
        return this.noticiaService.existeNoticia(id);
    }
}