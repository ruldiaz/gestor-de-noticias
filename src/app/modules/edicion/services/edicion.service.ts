import { Injectable } from "@angular/core";
import { NoticiaService } from "../../../services/noticia.service";
import { Noticia } from "../../../models/noticia.model";

@Injectable({
    providedIn: 'root'
})
export class EdicionService {
    constructor(private noticiaService: NoticiaService) {}

    /**
     * Módulo de edición: Edita una noticia existente
     * @param id ID de la noticia a editar
     * @param titulo Nuevo título
     * @param contenido Nuevo contenido
     * @param imagenUrl Nueva URL de imagen
     * @param autor Nuevo autor
     * @returns true si se editó correctamente, false si no se encontró
     */
    editarNoticia(id: number, titulo: string, contenido: string, imagenUrl: string, autor: string): boolean {
        return this.noticiaService.editarNoticia(id, titulo, contenido, imagenUrl, autor);
    }

    /**
     * Busca una noticia por su ID
     * @param id ID de la noticia
     * @returns La noticia encontrada o undefined
     */
    buscaNoticiaPorId(id: number): Noticia | undefined {
        return this.noticiaService.buscarNoticiaPorId(id);
    }

}