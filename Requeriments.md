# Especificación de Requerimientos Técnicos y Funcionales: Sitio Web Chapamovil

Este documento define los requerimientos técnicos, de diseño y funcionales para el desarrollo del sitio web de **Chapamovil**. El objetivo es servir como guía definitiva para el equipo de desarrollo o programador a cargo del proyecto.

---

## 1. Resumen del Proyecto y Modelo de Negocio

*   **Tipo de Sitio:** Landing Page / Single Page (Estructura de una sola página con scroll suave).
*   **Modelo:** Catálogo institucional informativo enfocado en conversión directa.
*   **Propósito:** Mostrar los rubros comerciales que trabaja la empresa sin gestionar inventario ni stock en tiempo real. La web debe servir como una vitrina digital que canalice la demanda hacia la atención humana en las sucursales físicas.
*   **Público Objetivo:** Talleres mecánicos, chapistas, pintores automotrices y público particular que busca repuestos, accesorios o pintura de automotor de forma ágil.
*   **Prioridad de Dispositivo (UX):** *Mobile-First*. El 80% del tráfico estimado provendrá de dispositivos móviles desde talleres o la vía pública.

---

## 2. Requerimientos Funcionales (RF)

### RF-01: Estructura Single Page Dinámica
El sitio debe concentrar toda su información en una única URL organizada por secciones limpias y accesibles mediante un menú de navegación con anclajes (*smooth scroll*).

### RF-02: Catálogo de Rubros por Tarjetas Visuales
Sección dedicada a exponer las tres grandes líneas de producto mediante bloques o tarjetas visuales fijas (sin e-commerce ni bases de datos complejas):
1.  **Pintura Automotor:** Centrado en preparación de colores computarizada y manual, líneas premium de pintura y complementos.
2.  **Autopartes:** Carrocería, ópticas, iluminación y repuestos estructurales.
3.  **Accesorios:** Equipamiento, productos de *detailing*, estética y limpieza vehicular.
Cada rubro contará con un botón de acción que redirigirá al usuario a la sección de sucursales o iniciará una consulta preestablecida.

### RF-03: Enrutamiento Inteligente a WhatsApp (Click-to-Chat)
El sitio web no procesará pagos ni carritos de compra. La conversión se realizará mediante botones estratégicos de WhatsApp configurados con enlaces inteligentes y un texto predefinido igual para todas las sucursales:
*   **Mensaje único:** Al hacer clic en cualquier sucursal, abrirá el chat con el mensaje:  
    `"Hola Chapamovil, vi la página web y quería consultar por un producto..."`

### RF-04: Módulo Inmobiliario de Sucursales
Fichas diferenciadas para cada punto de atención al público, que deben incluir de forma obligatoria:
*   Dirección física exacta.
*   Mapa interactivo embebido individual (Google Maps API o iFrame optimizado).
*   Números de teléfono fijo y celular.
*   Horarios de atención comercial (especificando días de semana y sábados).

---

## 3. Requerimientos No Funcionales y Técnicos (RNF)

### RNF-01: Faja de Marcas Asociadas (Carrusel Infinito)
*   **Comportamiento:** Implementar un carrusel horizontal infinito de desplazamiento automático lateral (diseño tipo faja continua).
*   **Contenido:** Logotipos de marcas líderes distribuidas oficialmente (ej. Sherwin-Williams, Glasurit, etc.).
*   **Tecnología:** Uso de CSS nativo (`@keyframes`), SplideJS o SwiperJS configurados en modo *loop* continuo sin saltos visuales ni caídas de rendimiento.

### RNF-02: Feed Automatizado de Instagram (Integración Dinámica)
*   **Comportamiento:** Mostrar en formato cuadrícula (*grid*) las **últimas 3 publicaciones o reels** de la cuenta de Instagram de Chapamovil de forma 100% automatizada.
*   **Sincronización:** Cada nuevo posteo subido desde la aplicación móvil de Instagram debe reflejarse en tiempo real en la web sin intervención del administrador.
*   **Tecnología:** Uso de la API básica de visualización de Instagram (Instagram Basic Display API) mediante la generación de un Long-Lived Access Token, o en su defecto, integración mediante un widget externo optimizado (Juicer, Elfsight o similar) que garantice estabilidad y no ralentice la carga del sitio.

### RNF-03: Optimización de Rendimiento y Velocidad (Performance)
*   Las imágenes de los rubros y logos deben estar optimizadas bajo formatos modernos de compresión web (`.webp` o `.svg` para vectores) para asegurar un tiempo de carga inferior a 2 segundos en redes móviles 4G.
*   Carga asíncrona (*lazy loading*) para los mapas de Google y el feed de Instagram.

### RNF-04: Diseño Visual y Accesibilidad
*   Estilo moderno, automotor, con alto contraste.
*   Botones de llamada y WhatsApp con áreas de contacto amplias (mínimo 48x48px) para pantallas táctiles.

---

## 4. Arquitectura de la Información y Copys Oficiales

### Sección 1: Portada (Hero)
*   **Título:** Todo lo que tu auto necesita en un solo lugar.
*   **Subtítulo:** Venta de autopartes, accesorios y pintura automotor. Conseguí la solución exacta para tu vehículo con el respaldo de las mejores marcas del mercado.
*   **Botón CTA:** `[ Ver Rubros Disponibles ]`

### Sección 2: Carrusel de Marcas
*   *Faja gráfica continua con logotipos.*

### Sección 3: Detalles del Catálogo (Rubros)
*   **Pintura Automotor:** "Preparación de colores computarizada y manual con la máxima precisión. Trabajamos con líneas premium de marcas líderes para garantizar un acabado original, durabilidad y brillo perfecto en cada trabajo."
*   **Autopartes:** "Amplio catálogo en componentes de carrocería, ópticas, iluminación y repuestos clave. Todo lo necesario para reparar, renovar o restaurar la estructura de tu vehículo con piezas de calidad."
*   **Accesorios:** "Equipamiento, estética vehicular y cuidado para el automotor. Encontrá desde productos de detailing y limpieza hasta complementos que mejoran el confort y el estilo de tu auto."

### Sección 4: Redes Sociales
*   **Título:** Sumate a nuestra comunidad
*   **Subtítulo:** Mirá los nuevos ingresos, tendencias en estética vehicular y el día a día de nuestro stock directamente desde nuestro Instagram.
*   **Botón:** `[ @chapamovil_sgo en Instagram ]`

### Sección 5: Datos de Sucursales
*   **Sucursal Santiago del Estero:** Av. Rivadavia [N°] – Santiago del Estero.
*   **Sucursal La Banda:** Calle Bolivia [N°] – La Banda.