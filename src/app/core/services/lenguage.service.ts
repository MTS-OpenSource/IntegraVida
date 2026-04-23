import { Injectable, signal } from '@angular/core';
import {from} from 'rxjs';
import {Navbar} from '../../shared/navbar/navbar';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<'en' | 'es'>('es');

  translations: Record<string, Record<string, string>> = {
    es: {
      inicio: 'Inicio',
      servicios: 'Servicios',
      nosotros: 'Sobre Nosotros',
      contactanos: 'Contáctanos',
      sesion: 'Iniciar Sesión',
      registro: 'Registrarse',
      heroTitle: 'La plataforma clínica que transforma el control de la diabetes',
      heroTexto: 'GlucoSmart centraliza tu información médica, conecta con especialistas y utiliza IA para predecir tendencias, ofreciendo un cuidado proactivo y personalizado.',
      comenzar: 'Comenzar Ahora',
      service: 'Servicios',
      contactTitle: 'Hablemos de tu Salud',
      contactSubtitle: 'Estamos aquí para resolver tus dudas y ayudarte a comenzar tu camino hacia un mejor control.',
      emailLabel: 'Email Clínico',
      phoneLabel: 'Atención Directa',
      locationLabel: 'Sede Central',
      locationValue: 'Distrito Médico, Ciudad de México',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailFormLabel: 'Email',
      interestLabel: 'Interés',
      option1: 'Diagnóstico Avanzado',
      option2: 'Planes de Monitoreo',
      option3: 'Consulta Especializada',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿Cómo podemos ayudarte?',
      submitBtn: 'Enviar Solicitud',
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
      contactTitle: "Let's Talk About Your Health",
      contactSubtitle: 'We are here to answer your questions and help you start your journey toward better control.',
      emailLabel: 'Clinical Email',
      phoneLabel: 'Direct Support',
      locationLabel: 'Main Office',
      locationValue: 'Medical District, Mexico City',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailFormLabel: 'Email',
      interestLabel: 'Interest',
      option1: 'Advanced Diagnosis',
      option2: 'Monitoring Plans',
      option3: 'Specialized Consultation',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help you?',
      submitBtn: 'Send Request',
    }
  };

  translate(key: string): string {
    return this.translations[this.currentLang()][key] ?? key;
  }

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }
}
