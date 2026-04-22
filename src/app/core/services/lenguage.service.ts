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
      registro: 'Registrarse',
      heroTitle: 'La plataforma clínica que transforma el control de la diabetes',
      heroTexto: 'GlucoSmart centraliza tu información médica, conecta con especialistas y utiliza IA para predecir tendencias, ofreciendo un cuidado proactivo y personalizado.',
      comenzar: 'Comenzar Ahora',
      service: 'Servicios',
    },
    en: {
      inicio: 'Home',
      servicios: 'Services',
      nosotros: 'About Us',
      contactanos: 'Contact Us',
      sesion: 'Login',
      registro: 'Register',
      heroTitle: 'The clinical platform that transforms diabetes management',
      heroTexto: 'GlucoSmart centralizes your medical information, connects with specialists and uses AI to predict trends, offering proactive and personalized care.',
      comenzar: 'Start Now',
      service: 'Services',
    }
  };

  translate(key: string): string {
    return this.translations[this.currentLang()][key] ?? key;
  }

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }
}
