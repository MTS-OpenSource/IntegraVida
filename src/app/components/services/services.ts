import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  servicios = [
    {
      titulo: 'diagnosticoAvanzado', // Usa la llave de traducción
      imagen: './assets/diagnostico-avanzado.png'
    },
    {
      titulo: 'unidadNutricion',
      imagen: './assets/nutricion.png'
    },
    {
      titulo: 'farmacovigilancia',
      imagen: './assets/farmacovigilancia.png'
    },
    {
      titulo: 'educacionDiabetologica',
      imagen: './assets/educacion-diabetes.png'
    },
    {
      titulo: 'investigacionTerapias',
      imagen: './assets/terapias.png'
    },
    {
      titulo: 'farmaciaEspecializada',
      imagen: './assets/farmacia.png'
    },
    {
      titulo: 'rehabilitacionFisica',
      imagen: './assets/rehabilitacion.png'
    },
    {
      titulo: 'medicinaIntegrativa',
      imagen: './assets/medicina-integrativa.png'
    },
    {
      titulo: 'historialMedico',
      imagen: './assets/historial-medico.png'
    },
    {
      titulo: 'convertidorPdf',
      imagen: './assets/pdf.png'
    },
    {
      titulo: 'controlDatos',
      imagen: './assets/control-datos.png'
    },
  ];

  indiceActual = 0;
  constructor(public langService: LanguageService) {}

  // flechas
  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.servicios.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.servicios.length) % this.servicios.length;
  }

}
