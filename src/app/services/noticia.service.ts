import { Injectable } from "@angular/core";
import { Noticia } from "../models/noticia.model";

@Injectable({
    providedIn: 'root'
})
export class NoticiaService {
    private noticias: Noticia[];
    private contadorId: number = 1;

    constructor() {
        // Noticias de ejemplo para el arreglo inicial
        this.noticias = [
            new Noticia(1, 'Primera Noticia', 'Contenido de la primera noticia', 'https://ejemplo.com/imagen1.jpg', 'Autor 1'),
            new Noticia(2, 'Segunda Noticia', 'Contenido de la segunda noticia', 'https://ejemplo.com/imagen2.jpg', 'Autor 2')
        ];
        this.contadorId = 3;
    }

    // Modulo de agregacion para nuevas noticias
    agregarNoticia(titulo: string, contenido: string, imagenUrl: string, autor: string): Noticia {
        const nuevaNoticia = new Noticia(this.contadorId++, titulo, contenido, imagenUrl, autor);
        this.noticias.push(nuevaNoticia);
        return nuevaNoticia;
    }

    // Modulo para editar noticias existentes
    editarNoticia(id: number, titulo: string, contenido: string, imagenUrl: string, autor: string): boolean {
        const noticia = this.noticias.find( n => n.id === id );
        if ( noticia ) {
            noticia.titulo = titulo;
            noticia.contenido = contenido;
            noticia.imagenUrl = imagenUrl;
            noticia.autor = autor;
            return true;
        }
        return false;
    }

    // Modulo para eliminar noticias
    eliminarNoticia(id: number): boolean {
        const index = this.noticias.findIndex(n => n.id === id);
        if ( index !== -1 ) {
            this.noticias.splice(index, 1);
            return true;
        }
        return false;
    }

    // Obtener todas las noticias
    obtenerNoticias(): Noticia[] {
        return this.noticias;
    }

    // Buscar noticias por ID
    buscarNoticiaPorId(id: number): Noticia | undefined {
        return this.noticias.find(n => n.id === id);
    }

    // Verificar si existe una noticia
    existeNoticia(id: number): boolean {
        return this.noticias.some(n => n.id === id);
    }
}