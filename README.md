## 📚 Documentación del Proyecto: BIBLIOTECA

Este proyecto implementa la gestión de inventario para una biblioteca, cubriendo las entidades **Autores** y **Libros**, utilizando tanto una base de datos MariaDB/MySQL como una API REST local.

### ⚙️ Configuración y Ejecución


1.  **Base de Datos (MariaDB):**
    * **Configuración:** La conexión está definida en `src/lib/db.js`.
    * **Credenciales:** `mysql://examen:examen@127.0.0.1:3306/biblioteca`
    * **Estructura:** Creada mediante `src/data/db.sql`.

2.  **API REST Local:**
    * **Datos:** Definidos en `src/data/api.json`.
    * **Puerto:** `3001`.