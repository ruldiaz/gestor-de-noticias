import { Injectable } from "@angular/core";
import { NoticiaService } from "../../../services/noticia.service";
import { Noticia } from "../../../models/noticia.model";

@Injectable({
    providedIn: 'root'
})
export class AgregacionService {
    constructor(private noticiaService: NoticiaService) { }
        /**
         * Módulo de agregación: Agrega una nueva noticia al arreglo
         * @param titulo Título de la noticia
         * @param contenido Contenido de la noticia
         * @param imagenUrl URL de la imagen
         * @param autor Autor de la noticia
         * @returns La noticia agregada
         */
        agregarNoticia(titulo: string, contenido: string, imagenUrl: string, autor: string): Noticia {
            return this.noticiaService.agregarNoticia(titulo, contenido, imagenUrl, autor);
    }
}
