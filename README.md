# 🚀 Arrowwlee - Plataforma Educativa de Programación

> Una página web interactiva dedicada a enseñar los conceptos básicos de programación en **Java** y **Python** con un diseño estilo hacker/cibernético.

## 📋 Descripción

Arrowwlee es mi primer repositorio web, diseñado como una plataforma educativa moderna que combina contenido técnico sólido con una experiencia visual atractiva. La página está dirigida a estudiantes que quieren mejorar sus habilidades en programación de manera interactiva y dinámica.

## ✨ Características Principales

### 🎨 Diseño Visual
- **Tema cibernético**: Estética hacker con colores verde neón, azul y fondo oscuro
- **Animaciones dinámicas**: Efecto Matrix de lluvia de caracteres en el fondo
- **Tipografía**: Fuente Ubuntu Mono para un look profesional de terminal
- **Efectos interactivos**: Botones con animaciones, brillo y feedback visual

### 🎭 Efectos Especiales
- **Typewriter effect**: El título se escribe automáticamente letra por letra
- **Fondo Matrix**: Animación de caracteres cayendo estilo película Matrix (optimizada para no cansar la vista)
- **Botones dinámicos**: 
  - Animación pulsante constante
  - Efecto de brillo al pasar el mouse
  - Elevación y cambios de color
  - Feedback visual al hacer clic

### 📚 Contenido Educativo

#### ☕ Sección Java
- Fundamentos de programación
- Plataforma Java (JRE, JDK, Bytecode)
- Estructura de programas y sintaxis
- Clases, objetos y POO
- Herencia y polimorfismo
- Estructuras de control y arrays
- Ejemplos de código prácticos

#### 🐍 Sección Python
- Sintaxis básica y tipos de datos
- Listas, diccionarios y estructuras
- Condicionales y bucles
- Funciones y programación modular
- Programación orientada a objetos
- Manejo de archivos
- Expresiones regulares
- Bases de datos con SQLite

## 🗂️ Estructura del Proyecto

```
arrowwleeweb/
├── index.html          # Página principal con navegación
├── java.html           # Contenido educativo de Java
├── python.html         # Contenido educativo de Python
├── styles.css          # Estilos CSS con tema cibernético
├── scripts.js          # Efectos JavaScript (Matrix + Typewriter)
├── README.md           # Este archivo
└── imagenes/
    ├── java.jpg        # Logo de Java
    └── python.png      # Logo de Python
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Animaciones, efectos hover y responsive design
- **JavaScript ES6**: Efectos dinámicos y animaciones canvas
- **Canvas API**: Para el efecto Matrix de fondo

## 🎯 Funcionalidades Técnicas

### JavaScript
- **Efecto typewriter**: Animación de escritura automática
- **Animación Matrix**: Canvas con caracteres aleatorios cayendo
- **Optimización**: Controles de velocidad y densidad para mejor UX

### CSS
- **Flexbox**: Layout responsivo y adaptable
- **Keyframes**: Animaciones suaves y profesionales
- **Pseudo-elementos**: Efectos de brillo y overlays
- **Transitions**: Interacciones fluidas en todos los elementos
- **Media Queries**: 4 breakpoints para máxima compatibilidad
- **Mobile-first**: Optimización específica para dispositivos táctiles

## 🚀 Cómo Usar

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/arrowwleeweb.git
   ```

2. **Abre el proyecto**:
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local para mejor rendimiento

3. **Navega por la página**:
   - Disfruta los efectos visuales en la página principal
   - Explora las secciones de Java y Python
   - Interactúa con los botones animados

## 🎨 Personalización

### Modificar la velocidad del efecto Matrix
En `scripts.js`, líneas 29-30:
```javascript
const delay = isMobile ? 150 : 100; // Móvil: 150ms, Desktop: 100ms
}, delay); // Cambia estos valores para ajustar velocidad
```

### Ajustar densidad del efecto Matrix para móviles
En `scripts.js`, líneas 27-28:
```javascript
const spacing = isMobile ? 60 : 40;      // Espaciado entre caracteres
const frequency = isMobile ? 0.85 : 0.7; // Frecuencia de aparición
```

### Cambiar colores del tema
En `styles.css`:
```css
--hacker-green: #00FF00;    /* Verde principal */
--code-blue: #569CD6;       /* Azul de código */
--dark-bg: #1E1E1E;         /* Fondo oscuro */
```

### Personalizar breakpoints móviles
En los archivos CSS, puedes modificar:
```css
@media screen and (max-width: 768px) { /* Tablet */ }
@media screen and (max-width: 480px) { /* Móvil */ }
@media screen and (max-width: 320px) { /* Móvil pequeño */ }
```

## 📱 Responsive Design

La página está **completamente optimizada** para dispositivos móviles con breakpoints específicos:

### 🖥️ Desktop (769px+)
- ✅ Layout de dos columnas completo
- ✅ Efectos Matrix a velocidad normal
- ✅ Navegación horizontal
- ✅ Botones con efectos completos

### 📱 Tablet (768px y menos)
- ✅ Columnas apiladas verticalmente
- ✅ Botones de ancho completo
- ✅ Imágenes redimensionadas (150px → 120px)
- ✅ Texto optimizado para lectura
- ✅ Efectos Matrix reducidos

### 📱 Mobile (480px y menos)
- ✅ Tipografía adaptada (responsive font sizes)
- ✅ Padding reducido para maximizar espacio
- ✅ Navegación apilada en páginas internas
- ✅ Códigos de ejemplo con scroll horizontal
- ✅ Efecto Matrix optimizado para batería

### 📱 Mobile Pequeño (320px y menos)
- ✅ Optimización extrema de espacio
- ✅ Texto mínimo pero totalmente funcional
- ✅ Máxima eficiencia de rendimiento
- ✅ Botones touch-friendly

### ⚡ Optimizaciones de Rendimiento Mobile
```javascript
// Detección automática y ajuste de rendimiento
const isMobile = window.innerWidth <= 768;
const spacing = isMobile ? 60 : 40;        // Menos densidad en móviles
const frequency = isMobile ? 0.85 : 0.7;   // Menos frecuencia
const delay = isMobile ? 150 : 100;        // Más lento para ahorrar batería
```

### 🔋 Optimización de Batería
- **Efecto Matrix reducido**: Menor frecuencia de actualización en móviles
- **Transparencia optimizada**: Menos procesamiento gráfico
- **Canvas adaptativo**: Se redimensiona automáticamente
- **Animaciones suavizadas**: Delays mayores en dispositivos móviles

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📧 Contacto

¿Tienes sugerencias o encontraste un bug? 

**Email**: [damianlee18t@gmail.com](mailto:damianlee18t@gmail.com)

*También acepto donaciones para seguir mejorando y actualizando la página web* 💚

## 📄 Licencia

© 2025 Arrowwlee. Todos los derechos reservados - Hacking Ético ;]

---

### 🌟 Roadmap Futuro

- [ ] Añadir más lenguajes (JavaScript, C++)
- [ ] Sistema de ejercicios interactivos
- [ ] Dark/Light theme toggle
- [ ] Búsqueda de contenido
- [ ] Modo offline
- [ ] Integración con APIs educativas

**¡Gracias por visitar Arrowwlee y happy coding!** 🚀💻
