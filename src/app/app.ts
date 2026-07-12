import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Noticia } from './models/noticia.model';
import { NoticiaService } from './services/noticia.service';
import { AgregacionService } from './modules/agregacion/services/agregacion.service';
import { EdicionService } from './modules/edicion/services/edicion.service';
import { EliminacionService } from './modules/eliminacion/services/eliminacion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gestor-de-noticias');

  // Arreglo de noticias y JSON para visualizacion
  noticias: Noticia[] = [];
  noticiasJSON: string = '';

  // Variables para formularios
  nuevaNoticia = {
    titulo: '',
    contenido: '',
    imagenUrl: '',
    autor: ''
  };

  noticiaEditar = {
    id: 0,
    titulo: '',
    contenido: '',
    imagenUrl: '',
    autor: ''
  };

  idEliminar: number = 0;

  constructor(
    private noticiaService: NoticiaService,
    private agregacionService: AgregacionService,
    private edicionService: EdicionService,
    private eliminacionService: EliminacionService
  ) {
    this.actualizarLista();
  }

  actualizarLista() {
    this.noticias = this.noticiaService.obtenerNoticias();
    this.actualizarJSON();
  }

  actualizarJSON() {
    this.noticiasJSON = JSON.stringify(this.noticias, null, 2);
  }

  // Modulo de agregacion
  agregarNoticia() {
    const { titulo, contenido, imagenUrl, autor } = this.nuevaNoticia;
    if ( titulo && contenido && imagenUrl && autor ) {
      this.agregacionService.agregarNoticia(titulo, contenido, imagenUrl, autor);
      this.actualizarLista();
      // Limpiar formulario
      this.nuevaNoticia = { titulo: '', contenido: '', imagenUrl: '', autor: '' };
    } else {
      alert('Todos los campos son obligatorios');
    }
  }

  // Modulo de edicion
  editarNoticia() {
    const { id, titulo, contenido, imagenUrl, autor } = this.noticiaEditar;
    if ( id && titulo && contenido && imagenUrl && autor ) {
      const exito = this.edicionService.editarNoticia(id, titulo, contenido, imagenUrl, autor);
      if ( exito ) {
        this.actualizarLista();
        // Limpiar el formulario
        this.noticiaEditar = { id: 0, titulo: '', contenido: '', imagenUrl: '', autor: '' };
        alert('Noticia actualizada correctamente');
      } else {
        alert('No se encontró una noticia con ese ID');
      }
    } else {
      alert('Todos los campos son obligatorios');
    }
  }

  // Modulo de eliminacion
  eliminarNoticia() {
    if ( this.idEliminar ) {
      const exito = this.eliminacionService.eliminarNoticia(this.idEliminar);
      if ( exito ) {
        this.actualizarLista();
        this.idEliminar = 0;
        alert('Noticia eliminada correctamente');
      } else {
        alert('No se encontró una noticia con ese ID');
      }
    } else {
      alert('Debes ingresar un ID');
    }
  }
}
