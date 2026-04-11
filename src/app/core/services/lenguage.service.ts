import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<'en' | 'es'>('es');

  translations: Record<string, Record<string, string>> = {
    es: {
      inicio: 'Inicio',
      servicios: 'Servicios',
      nosotros: 'Sobre Nosotros',
      contactanos: 'Contáctanos',
      sesion: 'Iniciar Sesion',
      registro: 'Registro',
      heroTitle: 'La plataforma clínica que transforma el control de la diabetes',
    },
    en: {
      inicio: 'Home',
      servicios: 'Services',
      nosotros: 'About Us',
      contactanos: 'Contact Us',
      sesion: 'Login',
      registro: 'Register',
      heroTitle: 'The clinical platform that transforms diabetes management',
    }
  };

  translate(key: string): string {
    return this.translations[this.currentLang()][key] ?? key;
  }

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }
}
