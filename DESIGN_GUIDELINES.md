# Manual de Estilo y Guía de Diseño (Design Guidelines) - VOCACIÓN+

Este documento define la identidad visual, sistema de diseño y lineamientos UI/UX de **VOCACIÓN+**, asegurando la coherencia en todas las vistas de la plataforma.

---

## 1. Identidad y Concepto Visual
- **Tono de marca**: Creada por jóvenes para jóvenes (Bachillerato Técnico Humanístico - BTH, Santa Cruz, Bolivia). Fresca, cercana, lúdica (playful), moderna y confiable.
- **Estilo Visual**: *Claymorphism suave* y estética playful con bordes muy redondeados, tarjetas contenedoras blancas, trazos decorativos (doodles, estrellas, destellos) e íconos coloridos.

---

## 2. Tipografía

Se utilizan dos tipografías principales desde **Google Fonts**:

1. **Fredoka** (`'Fredoka', sans-serif`):
   - **Uso**: Titulares principales (`h1`, `h2`), botones, badges, el logo y números destacados.
   - **Pesos**: 500 (Medium), 600 (SemiBold), 700 (Bold).
2. **Nunito** (`'Nunito', sans-serif`):
   - **Uso**: Cuerpo de texto, descripciones, elementos de navegación y etiquetas secundarias.
   - **Pesos**: 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold).

---

## 3. Paleta de Colores y Tokens

### 3.1 Colores Principales
- **Fondo de Página (Body)**: `#F2F2F2`
- **Fondo de Tarjetas (Surface)**: `#FFFFFF`
- **Color Principal de Marca (Primary Purple)**: `#7C3AED`
- **Hover Principal**: `#6D28D9`
- **Borde de Contenedores**: `#E9D5FF` (Púrpura suave, `2px solid`)
- **Texto Principal**: `#1a1a2e` / `#374151`
- **Texto Secundario / Muted**: `#6B7280` / `#9CA3AF`

### 3.2 Paleta Lúdica de Badges y Paneles
Cada sección o categoría utiliza etiquetas tipo *pill badge* con fondos pastel y bordes a juego:
- **Verde Menta (Populares / Éxito)**: `bg: #A7F3D0`, `text: #065F46`
- **Rosa Pastel (Test / Destacado)**: `bg: #FBCFE8`, `text: #9D174D`
- **Azul Cielo (Universidades / Info)**: `bg: #BFDBFE`, `text: #1E3A8A`
- **Amarillo Cálido (Alertas / Notas)**: `bg: #FCD34D`, `text: #92400E`
- **Púrpura Claro (General)**: `bg: #E9D5FF`, `text: #7C3AED`

---

## 4. Estructura de Encabezado (Header)

Todas las vistas deben incluir la barra de navegación idéntica:
- **Posición**: Sticky superior (`position: sticky; top: 0; z-index: 100;`).
- **Fondo**: `#FFFFFF` con `border-bottom: 2px solid #E5E7EB` y altura de `64px`.
- **Logo**: 
  - `VOCACIÓN` en Fredoka 700 (`#1a1a2e`) + `+` en Fredoka 700 (`#7C3AED`).
  - Subtítulo de marca: `TU FUTURO, TU ELECCIÓN` (Nunito 600, `#6B7280`).
- **Navegación Unificada**:
  1. `INICIO` (`index.html`)
  2. `CARRERAS` (`carreras.html`)
  3. `TEST VOCACIONAL` (`test.html`)
  4. `UNIVERSIDADES` (`universidades.html`)
  5. `RECURSOS` (`recursos.html`)
  6. `SOBRE NOSOTROS` (`nosotros.html`)
- **Indicador Activo**: El enlace correspondiente a la vista actual lleva la clase `.active`, cambiando el color a `#7C3AED` con un sub-borde de `2.5px solid #7C3AED`.

---

## 5. Estructura de Pie de Página (Footer)

Todas las vistas deben terminar con un pie de página unificado que refleje la personalidad lúdica e institucional del proyecto BTH:
- Fondo blanco (`#FFFFFF`) con borde superior `#E9D5FF`.
- Enlaces rápidos, información del proyecto BTH 2026 Santa Cruz y derechos reservados.

---

## 6. Tarjetas y Paneles (.panel / .card)

1. **Forma**: `border-radius: 20px`, fondo `#FFFFFF`, borde `2px solid #E9D5FF`.
2. **Titulares con Badge**: Cada panel o tarjeta temática lleva un `panel-header` con ícono Phosphor y título en cápsula pastel.
3. **Botones e Interacciones**:
   - Botón Primario: `.hero-btn-primary` o `.panel-link` con bordes suaves de 10px a 12px.
   - Efecto Hover: Elevación suave (`transform: translateY(-2px);`) y sombra pastel (`box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25)`).

---

## 7. Elementos Decorativos (Doodles)

Para conservar la frescura del diseño, las tarjetas principales y secciones pueden llevar pequeños doodles flotantes (`✦`, `★`, `· · ·`, `→`, `♛`, `☺`, `✿`, `✕`) con colores vibrantes y opacidades suaves.
