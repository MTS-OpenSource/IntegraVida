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
      locationValue: 'Lima - Perú',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailFormLabel: 'Email',
      interestLabel: 'Interés',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿Cómo podemos ayudarte?',
      submitBtn: 'Enviar Solicitud',
      serviciosEspecializados: 'Servicios Especializados',
      diagnosticoAvanzado: 'Diagnóstico Avanzado',
      unidadNutricion: 'Unidad de Nutrición',
      farmacovigilancia: 'Farmacovigilancia',
      educacionDiabetologica: 'Educación Diabetológica',
      investigacionTerapias: 'Investigación y Terapias',
      farmaciaEspecializada: 'Farmacia Especializada',
      rehabilitacionFisica: 'Rehabilitación Física y Ejercicio',
      medicinaIntegrativa: 'Medicina Integrativa',
      historialMedico: 'Historial Médico',
      convertidorPdf: 'Convertidor a PDF',
      controlDatos: 'Control de Datos',
      testimoniosTitulo: 'Testimonios',
      sobreNosotros: 'Sobre Nosotros',
      descripcionGeneral: 'En GlucoSmart ayudamos a centralizar y organizar toda la información clínica de pacientes con diabetes, facilitando el seguimiento, la gestión y la toma de decisiones médicas de manera confiable y eficiente.',
      mision: 'Misión',
      misionTexto: 'Gestionar de manera integral la información clínica de pacientes con diabetes, facilitando el seguimiento y la toma de decisiones médicas.',
      vision: 'Visión',
      visionTexto: 'Ser un referente en soluciones digitales de salud que optimicen el manejo de la diabetes y mejoren la calidad de vida de los pacientes.',
      testimoniosSubtitulo: 'Descubre cómo GlucoSmart ayuda a pacientes y médicos a gestionar la diabetes de manera eficiente y segura.',
      testimonioCarlos: 'GlucoSmart me ayuda a llevar un control preciso de mi glucosa y medicamentos. Ahora puedo seguir mi tratamiento sin preocuparme por olvidar nada.',
      testimonioAndrea: 'Puedo acceder a la información de mis pacientes de forma rápida y organizada, lo que mejora la calidad de mis decisiones clínicas.',
      testimonioAndres: 'Gracias a GlucoSmart puedo monitorear la salud de mi mamá desde casa y asegurarme de que sigue su tratamiento correctamente.',
      terminosCondiciones: 'Términos y condiciones',
      option1: 'Diagnóstico Avanzado',
      option2: 'Planes de Monitoreo',
      option3: 'Consulta Especializada'
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
      locationValue: 'Lima - Perú',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailFormLabel: 'Email',
      interestLabel: 'Interest',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help you?',
      submitBtn: 'Send Request',
      serviciosEspecializados: 'Specialized Services',
      diagnosticoAvanzado: 'Advanced Diagnosis',
      unidadNutricion: 'Nutrition Unit',
      farmacovigilancia: 'Pharmacovigilance',
      educacionDiabetologica: 'Diabetes Education',
      investigacionTerapias: 'Research and Therapies',
      farmaciaEspecializada: 'Specialized Pharmacy',
      rehabilitacionFisica: 'Physical Rehabilitation & Exercise',
      medicinaIntegrativa: 'Integrative Medicine',
      historialMedico: 'Medical Records',
      convertidorPdf: 'PDF Converter',
      controlDatos: 'Data Control',
      sobreNosotros: 'About Us',
      descripcionGeneral: 'At GlucoSmart, we help centralize and organize all clinical information for diabetes patients, facilitating reliable and efficient monitoring, management, and medical decision-making.',
      mision: 'Mission',
      misionTexto: 'Integrally manage the clinical information of diabetes patients, facilitating monitoring and medical decision-making.',
      vision: 'Vision',
      visionTexto: 'To be a leader in digital health solutions that optimize diabetes management and improve patients\' quality of life.',
      testimoniosTitulo: 'Testimonials',
      testimoniosSubtitulo: 'Discover how GlucoSmart helps patients and doctors manage diabetes efficiently and safely.',
      testimonioCarlos: 'GlucoSmart helps me keep precise control of my glucose and medications. Now I can follow my treatment without worrying about forgetting anything.',
      testimonioAndrea: 'I can access my patients\' information quickly and in an organized way, which improves the quality of my clinical decisions.',
      testimonioAndres: 'Thanks to GlucoSmart, I can monitor my mom\'s health from home and make sure she follows her treatment correctly.',
      terminosCondiciones: 'Terms and Conditions',
      option1: 'Advanced Diagnosis',
      option2: 'Monitoring Plans',
      option3: 'Specialized Consultation'
    }
  };

  translate(key: string): string {
    return this.translations[this.currentLang()][key] ?? key;
  }

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }
}
