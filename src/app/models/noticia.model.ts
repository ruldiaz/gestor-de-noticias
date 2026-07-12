export class Noticia {
    id: number;
    titulo: string;
    contenido: string;
    imagenUrl: string;
    autor: string;

    constructor(id: number, titulo: string, contenido: string, imagenUrl: string, autor: string) {
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.imagenUrl = imagenUrl;
        this.autor = autor;
    }
}