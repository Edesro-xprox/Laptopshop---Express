# LaptopShopper API

API backend para la gestión de una tienda de laptops.

## Estructura del proyecto

- `server.js`: Punto de entrada principal.
- `src/`
  - `app.js`: Configuración principal de la app Express.
  - `config/database.js`: Configuración de la base de datos.
  - `controllers/`: Lógica de controladores para manejar las peticiones.
  - `repositories/`: Acceso y gestión de datos.
  - `routes/`: Definición de rutas de la API.
  - `services/`: Lógica de negocio y servicios.

## Instalación

1. Clona el repositorio.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura la base de datos en `src/config/database.js`.
4. Inicia el servidor:
   ```bash
   npm start
   ```

## Endpoints principales

- `/api/data` — Gestión de datos generales.
- `/api/shop` — Operaciones de la tienda.

## Notas
- Asegúrate de tener Node.js y una base de datos configurada.
- Personaliza las rutas y controladores según tus necesidades.
