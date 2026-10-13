

## ⚙️ Características y Funcionalidades JavaScript

El sitio web cuenta con interactividad avanzada basada en **jQuery** y **JavaScript Vanilla (Nativo)** para mejorar la experiencia de navegación del usuario:

### 1. 🧭 Navegación Inteligente y Desplazamiento Suave (Smooth Scroll)
Se implementaron controladores de eventos para gestionar el desplazamiento fluido de la página hacia diferentes secciones, tanto desde el menú principal como desde el pie de página (*footer*).

*   **Menú Principal (Sobre Mí):** Al hacer clic en `#btn-Smi`, la página se desplaza suavemente hacia la sección `sobreMi` en 500ms. Si el menú móvil está desplegado (`.button`), este se cierra de forma automática.
*   **Enlaces del Footer:** El script calcula dinámicamente la posición de los elementos clave en la pantalla (`#header`, `#servicios`, `#citas`, `#sobreMi`) para permitir un retorno o navegación rápida desde el pie de página:
    *   `#logofooterEnlace` ➡️ Desplazamiento al Inicio / Header.
    *   `#citasFooter` ➡️ Desplazamiento a Citas.
    *   `#portfolio` ➡️ Desplazamiento a Servicios.
    *   `#sobreMiFooter` ➡️ Desplazamiento a Sobre Mí.

---

### 🎠 2. Carrusel de Imágenes Interactivo
Se programó un componente de carrusel (slider) personalizado utilizando JavaScript nativo para la sección visual o de testimonios.

*   **Cálculo de Desplazamiento:** Al hacer clic en los indicadores (puntos), el contenedor principal (`.grande`) se desplaza horizontalmente usando transformaciones CSS (`translateX`) calculadas según el índice seleccionado (multiplicando cada posición por `-51%`).
*   **Clases Activas:** El script remueve de forma limpia el estado `'activo'` de todos los puntos de control y se lo asigna únicamente al elemento que recibió el clic para actualizar el indicador visual.
