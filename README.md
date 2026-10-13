# 💄 Bride Makeup - Landing Page

¡Bienvenido/a al repositorio de **Bride Makeup**! Una landing page diseñada estratégicamente para la captación de nuevos clientes, ofreciendo una interfaz atractiva, minimalista y fácil de navegar enfocada en destacar el trabajo visual de la maquillista profesional **Laura Montiel**.

---

## 🎯 Objetivo del Proyecto
El propósito principal de esta página es convertir visitantes en clientes potenciales a través de:

*   **Navegación Intuitiva:** Secciones claras y directas (*Sobre mí, Servicios, Agendar cita*).
*   **Diseño Responsive:** Adaptabilidad completa para una visualización perfecta en dispositivos móviles, tablets y computadoras.
*   **Copywriting Optimizado:** Textos persuasivos orientados a conectar emocionalmente con marcas y proyectos exigentes.
*   **SEO Básico:** Estructura semántica para mejorar el posicionamiento en buscadores.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

*   **Maquetación:** HTML5 semántico.
*   **Estilos:** SASS (SCSS) y CSS3 personalizado (Paleta de colores elegante y tipografía minimalista).
*   **Interactividad:** JavaScript Nativo (Vanilla JS) y jQuery.
*   **Despliegue (Hosting):** Netlify.

---

## ⚙️ Características y Funcionalidades JavaScript

El sitio web cuenta con interactividad avanzada para mejorar la experiencia de navegación del usuario:

### 1. 🧭 Navegación Inteligente y Desplazamiento Suave (Smooth Scroll)
Se implementaron controladores de eventos para gestionar el desplazamiento fluido de la página hacia diferentes secciones, tanto desde el menú principal como desde el pie de página (*footer*):

*   **Menú Principal (Sobre Mí):** Al hacer clic en `#btn-Smi`, la página se desplaza suavemente hacia la sección `sobreMi` en 500ms. Si el menú móvil está desplegado (`.button`), este se cierra de forma automática.
*   **Enlaces del Footer:** El script calcula dinámicamente la posición de los elementos clave en la pantalla (`#header`, `#servicios`, `#citas`, `#sobreMi`) para permitir un retorno o navegación rápida desde el pie de página:
    *   `#logofooterEnlace` ➡️ Desplazamiento al Inicio / Header.
    *   `#citasFooter` ➡️ Desplazamiento a Citas.
    *   `#portfolio` ➡️ Desplazamiento a Servicios.
    *   `#sobreMiFooter` ➡️ Desplazamiento a Sobre Mí.

### 🎠 2. Carrusel de Imágenes Interactivo
Se programó un componente de carrusel (*slider*) personalizado utilizando JavaScript nativo para la sección visual o de testimonios.

*   **Cálculo de Desplazamiento:** Al hacer clic en los indicadores (puntos), el contenedor principal (`.grande`) se desplaza horizontalmente usando transformaciones CSS (`translateX`) calculadas según el índice seleccionado (multiplicando cada posición por `-51%`).
*   **Clases Activas:** El script remueve de forma limpia el estado `'activo'` de todos los puntos de control y se lo asigna únicamente al elemento que recibió el clic para actualizar el indicador visual.

---

## 🎨 Estilos y Diseño (SASS)

La interfaz y el diseño visual del sitio web se desarrollaron utilizando **SASS (SCSS)**, lo que permite mantener un código de estilos modular, limpio y escalable.

### 🌟 Características de los Estilos
*   **Variables Globales:** Centralización de la paleta de colores, tipografías y transiciones para facilitar cambios de diseño rápidos.
*   **Anidamiento (Nesting):** Estructura de código CSS limpia que imita la jerarquía del HTML (muy útil en elementos repetitivos como el menú de navegación y el footer).
*   **Arquitectura Modular:** El diseño se divide en archivos parciales separados (ej. botones, carrusel, secciones) para un mantenimiento más sencillo.

---

## 📸 Vista Previa del Sitio

<div align="center">
  <img width="600" alt="Vista previa de Bride Makeup" src="https://github.com/user-attachments/assets/296180be-696f-40b8-9556-5333ecfee17b" />
</div>

---

## 🔗 Enlaces del Proyecto
Puedes ver el proyecto en producción y revisar el código fuente a través de los siguientes enlaces:

*   **Sitio Web en Vivo:** [Visitar Landing Page en Netlify](https://bridemakeup.netlify.app/)
*   **Código Fuente:** [Repositorio en GitHub](https://github.com/LandsCode/brides-makeup)

---
<div align="center">
  Diseñado por <b>Landy Camacho</b> | Copyright © Bride Makeup
</div>

