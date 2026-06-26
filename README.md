# IntegraVida

> **Healthcare-focused web experience for diabetes care and patient engagement**

![TypeScript](https://img.shields.io/badge/TypeScript-50.5%25-3178c6?logo=typescript)
![CSS](https://img.shields.io/badge/CSS-27.1%25-1572b6?logo=css3)
![HTML](https://img.shields.io/badge/HTML-22.4%25-e34c26?logo=html5)
![Angular](https://img.shields.io/badge/Angular-21-dd0031?logo=angular)
![License](https://img.shields.io/badge/License-Open%20Source-green)

---

## 📋 Descripción

IntegraVida es una plataforma web moderna diseñada para mejorar la experiencia de pacientes con diabetes y facilitar la comunicación entre profesionales de la salud y sus pacientes. El proyecto implementa una landing page profesional de una sola página (SPA) construida con **Angular 21** y desplegada automáticamente en **GitHub Pages**.

### Características Principales

- ✅ **Landing page responsiva** con navegación fluida
- ✅ **Soporte multiidioma** (Español e Inglés)
- ✅ **Componentes reutilizables** y mantenibles
- ✅ **Despliegue automático** con GitHub Actions
- ✅ **Optimizado para GitHub Pages** con estrategia de enrutamiento SPA
- ✅ **Diseño moderno** con componentes de interfaz profesionales

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Descripción |
|---|---|---|
| **Angular** | 21.1.0 | Framework principal con componentes standalone |
| **TypeScript** | 5.9.2 | Lenguaje de tipado estático |
| **RxJS** | 7.8.0 | Programación reactiva |
| **Angular Router** | 21.1.0 | Enrutamiento de SPA |
| **Angular Signals** | 21.1.0 | Gestión de estado ligera |
| **Vite** | - | Build tool moderno |
| **Vitest** | 4.0.8 | Testing framework |
| **FontAwesome** | 7.2.0 | Biblioteca de iconos |
| **Express.js** | 5.1.0 | Servidor (SSR) |

---

## 📁 Estructura del Proyecto

```
IntegraVida/
├── .github/
│   └── workflows/
│       └── static.yml                 # Pipeline de despliegue automático en GitHub Pages
├── public/                            # Activos estáticos públicos
├── src/
│   ├── app/
│   │   ├── components/               # Componentes reutilizables
│   │   │   ├── about/                # Sección "Acerca de"
│   │   │   ├── contact/              # Formulario de contacto
│   │   │   ├── hero/                 # Sección principal
│   │   │   ├── services/             # Descripción de servicios
│   │   │   └── testimonials/         # Testimonios de pacientes
│   │   ├── core/
│   │   │   └── services/
│   │   │       └── language.service.ts # Servicio de internacionalización
│   │   ├── pages/                    # Páginas de la aplicación
│   │   │   ├── landing/              # Página de inicio
│   │   │   └── pages/
│   │   ├── shared/                   # Componentes compartidos
│   │   │   ├── button/               # Botones reutilizables
│   │   │   ├── footer/               # Pie de página
│   │   │   └── navbar/               # Barra de navegación
│   │   ├── app.config.ts             # Configuración global
│   │   ├── app.routes.ts             # Definición de rutas
│   │   └── app.ts                    # Componente raíz
│   ├── assets/                       # Imágenes y recursos SVG
│   ├── index.html                    # Template HTML principal
│   ├── main.ts                       # Punto de entrada
│   └── styles.css                    # Estilos globales
├── angular.json                      # Configuración Angular CLI
├── package.json                      # Dependencias del proyecto
├── tsconfig.json                     # Configuración TypeScript
└── README.md                         # Este archivo
```

---

## 🌐 Enrutamiento

La aplicación utiliza una estrategia de enrutamiento optimizada para GitHub Pages:

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio (Landing) |

Esta configuración evita problemas de redirección y funciona perfectamente con el hosting estático de GitHub Pages.

---

## 🌍 Internacionalización (i18n)

El proyecto incluye un servicio de idiomas ligero e integrado:

| Idioma | Estado |
|---|---|
| 🇪🇸 Español | Idioma por defecto |
| 🇺🇸 English | Idioma secundario |

**Ubicación:** `src/app/core/services/language.service.ts`

Los servicios de traducción se pueden actualizar fácilmente para agregar más idiomas.

---

## 🚀 Primeros Pasos

### Requisitos Previos

- **Node.js** ≥ 18.x
- **npm** ≥ 10.8.2
- **Angular CLI** ≥ 21.x

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MTS-OpenSource/IntegraVida.git
cd IntegraVida

# Instalar dependencias
npm install
```

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en:

```
http://localhost:4200
```

El servidor recargará automáticamente los cambios mientras desarrollas.

### Testing

```bash
# Ejecutar tests con Vitest
npm test
```

---

## 📦 Construcción para Producción

```bash
# Compilación optimizada para producción
npm run build
```

Los archivos compilados se generarán en:

```
dist/IntegraVida/
```

### Build para GitHub Pages

El proceso está automatizado. Para desplegar a producción:

```bash
# Push a la rama principal (automáticamente dispara el workflow)
git push origin main
```

O a la rama de desarrollo:

```bash
git push origin development
```

---

## 🔄 Despliegue Automático con GitHub Actions

El proyecto está configurado para desplegar automáticamente en GitHub Pages mediante GitHub Actions.

### Workflow Automático (`.github/workflows/static.yml`)

El workflow ejecuta automáticamente:

1. ✅ Instala las dependencias (`npm ci`)
2. ✅ Compila la aplicación para GitHub Pages
3. ✅ Publica los archivos estáticos
4. ✅ Crea un archivo `404.html` para enrutamiento SPA
5. ✅ Despliega en GitHub Pages

### Configuración Requerida

En la configuración del repositorio de GitHub, asegúrate de:

1. Ir a **Settings** → **Pages**
2. Configurar **Source** → **GitHub Actions**
3. El despliegue se ejecutará automáticamente con cada push a `main` o `development`

### Ver Despliegue en Vivo

🌐 **URL en Vivo:** https://mts-opensource.github.io/IntegraVida/

---

## 📝 Scripts Disponibles

| Script | Descripción |
|---|---|
| `npm start` | Inicia servidor de desarrollo (puerto 4200) |
| `npm run build` | Compilación optimizada para producción |
| `npm run watch` | Build en modo watch (desarrollo) |
| `npm test` | Ejecuta tests con Vitest |
| `npm run ng` | Ejecuta comandos de Angular CLI |

---

## 🎯 Mejoras Futuras

- [ ] Migración completa a TypeScript strict mode
- [ ] Implementación de más componentes de UI
- [ ] Testing E2E con Cypress
- [ ] Integración de backend API
- [ ] Análisis de performance y SEO
- [ ] Soporte para más idiomas
- [ ] Modo dark/light theme
- [ ] Progressive Web App (PWA)

---

## 📄 Licencia

Este proyecto es de código abierto y pertenece a la organización **MTS-OpenSource**.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto y Soporte

- 📧 Organización: [MTS-OpenSource](https://github.com/MTS-OpenSource)
- 🐛 Reportar bugs: [Issues](https://github.com/MTS-OpenSource/IntegraVida/issues)
- 💬 Discusiones: [GitHub Discussions](https://github.com/MTS-OpenSource/IntegraVida/discussions)

---

## 📚 Recursos Adicionales

- [Documentación Angular](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Angular CLI Reference](https://angular.io/cli)

---

<div align="center">

**Hecho con ❤️ por MTS-OpenSource**

[⬆ Volver arriba](#integravida)

</div>
