# Prueba Practica 2

Breve descripción o eslogan de tu proyecto.

## Índice
1. [Descripción](#descripción)
2. [Instalación](#instalación)
   - [Configuración del Backend](#configuración-del-backend)
   - [Configuración del Frontend](#configuración-del-frontend)
3. [Creación de Profile](#creación-de-profile)


## Descripción

Prueba practica 2 estudiante Nicolas Henriquez Pedraza
rut 202135919
## Recomendacion
Para el Backend:

* Node.js y npm:
        Asegúrate de tener Node.js y npm instalados. Puedes descargarlos desde https://nodejs.org/.

* MongoDB:
        Deberán tener una instancia de MongoDB ejecutándose localmente o proporcionar la URL de conexión a una base de datos MongoDB.

Para el Frontend:

* Node.js y npm:
        Asegúrate de tener Node.js y npm instalados. Puedes descargarlos desde https://nodejs.org/.

Recomendaciones para el Desarrollo:

* Git:
        Se recomienda tener Git instalado para clonar el repositorio y gestionar versiones.

    Editor de Código:
        Se sugiere utilizar un editor de código como Visual Studio Code, Sublime Text, Atom, o cualquier otro de tu preferencia.
## Instalación


```bash
# Clona el repositorio
git clone https://github.com/Bharragan/pruebaPractica2.git
```

## Configuración del Backend


1. **Variables de Entorno:**
   - Crea un archivo `.env` en el directorio `backend` para almacenar las variables de entorno sensibles.
   - Ejemplo de contenido del archivo `.env`:

     ```plaintext
     PORT=3001
     MONGODB_URI=mongodb://localhost:27017/tu-base-de-datos
     ```

     - `PORT`: Puerto en el que se ejecutará el servidor.
     - `MONGODB_URI`: Cadena de conexión a tu base de datos MongoDB.

2. **Instalación de Dependencias:**
   - Asegúrate de haber instalado las dependencias del backend con `npm install` en el directorio `backend`.

3. **Inicio del Servidor:**
   - Ejecuta el servidor con `npm start` en el directorio `backend`.
   - Verifica que el backend se esté ejecutando correctamente en la URL especificada en la consola.

Con estos pasos, habrás configurado el backend de tu aplicación.
## Configuración del Frontend

1. **Variables de Entorno:**
   - Crea un archivo `.env` en el directorio `frontend` para almacenar las variables de entorno.
   - Ejemplo de contenido del archivo `.env`:

     ```plaintext
     REACT_APP_API_URL=http://localhost:3001
     ```

     - `REACT_APP_API_URL`= URL del backend.

2. **Instalación de Dependencias:**
   - Asegúrate de haber instalado las dependencias del frontend con `npm install` en el directorio `frontend`.

3. **Inicio de la Aplicación:**
   - Ejecuta la aplicación con `npm start` en el directorio `frontend`.
   - Abre tu navegador y accede a la URL especificada en la consola para ver la aplicación.

Con estos pasos, habrás configurado el frontend de tu aplicación y podrás comenzar a desarrollar.

## Creacion de profile
Para este programa es necesario crear un profile para que se ejecute, adjunto archivo de postman para probar creacion de profile.