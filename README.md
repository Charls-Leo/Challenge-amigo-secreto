# Juego del Amigo Secreto — Challenge Alura Latam

Esta es la solución a un desafío propuesto en el programa de Oracle One Generation, en combenio con Alura Latam (One Nex Education, G9 LAD). El cual consiste en una sencilla aplicación web para organizar un sorteo de un amigo secreto, donde se puede agregar nombres, validar entradas, mostrarlos en pantalla, sortear un nombre aleatorio y reiniciar el juego.


---


## Objetivos de aprendizaje

- **Manipulación del DOM**: crear, borrar y actualizar nodos (`createElement`, `appendChild`, `innerHTML`).
- **Manejo de eventos** en elementos HTML (clic en botones, enfoque de input).
- **Validación de entradas** de usuario (requerido, evitar dígitos, manejo de espacios).
- **Estructuras de datos** básicas en JS (uso de arreglos, `push`, acceso por índice).
- **Buenas prácticas**: funciones pequeñas, separación de responsabilidades (UI vs lógica), estados iniciales y reinicio.
- **Accesibilidad básica**: uso de `aria-live` para notificar resultados, enfoque en el input tras acciones clave.


---


## Funcionalidades

- Agregar nombres a una lista desde un campo de texto (con validación para evitar entradas vacías o números).
- Visualizar dinámicamente la lista de amigos agregados.
- Sortear un amigo al azar desde la lista.
- Reiniciar el juego (limpiar lista, resultados y preparar el input).


---


## Instalación y puesta en marcha

### Opción A: Clonar el repositorio (recomendada)

```bash
# 1) Clonar
git clone (https://github.com/Charls-Leo/Challenge-amigo-secreto.git)

# 2) Entrar al directorio
cd Challenge-amigo-secreto

# 3) Abrir en el navegador
# - O arrastra index.html al navegador
# - O usa un servidor local
```


---


## Estructura del proyecto
```bash
Juego-Amigo-Secreto/
├── index.html      # Estructura del documento
├── app.js          # Lógica (agregar, validar, mostrar, sortear, reiniciar)
├── style.css       # Estilos
└── assets/         # Íconos e imágenes 
```


---


## Cómo usar la aplicación

- **Agregar nombre**
Escribe un nombre en el campo de texto y presiona Agregar.

- **Se validará que no esté vacío y que no contenga números.**
Si es válido, el nombre se añadirá a la lista de amigos.

- **Ver la lista**
Debajo del campo de entrada, verás un listado con todos los amigos agregados (uno por línea).

- **Sortear amigo**
Presiona Sortear amigo.
Se seleccionará un nombre al azar de la lista y se mostrará en la sección de resultados.

- **Reiniciar**
Presiona Reiniciar para limpiar la lista y el resultado del sorteo y dejar el input listo para empezar de nuevo.

### Notas
Si intentas sortear sin haber agregado nombres, se mostrará un aviso.

Los nombres pueden repetirse en el sorteo entre clics (cada sorteo es independiente).
Si quieres la variante “cada amigo solo sale una vez”, puedes modificar la lógica para extraer elementos del arreglo al ser sorteados.


--- 


## Validaciones y mensajes

- **Campo vacío:**
“Por favor escribe un nombre válido.”

- **Contiene números:**
“No se permite incluir números en los nombres.”

- **Sortear sin nombres:**
“No hay amigos en la lista para sortear.”

Estos mensajes aparecen como alertas del navegador.


