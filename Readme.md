# Spaced Repetition Front

<img src="notas.png" alt="Logo" width="120"/>

Aplicación web para la gestión y repaso de notas utilizando el método de repetición espaciada.


## Descripción

Este proyecto es una interfaz web para gestionar notas y recordatorios, permitiendo a los usuarios añadir, repasar y registrar notas diarias. Utiliza el método de repetición espaciada para mejorar la retención de información.

## Características

- Registro e inicio de sesión de usuario mediante un "nametag".
- Añadir nuevas notas o recordatorios.
- Repasar notas pendientes del día.
- Interfaz sencilla y responsiva.
- Integración con backend vía API REST ([ver configuración en `js/env.js`](js/env.js)).


## Uso

1. Inicia el servidor local (puedes usar [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VSCode).
2. Abre `index.html` en tu navegador.
3. Regístrate con un nombre de usuario.
4. Añade notas desde la sección "Añadir".
5. Repasa tus notas diarias desde la sección "Repasar".

## Tecnologías Utilizadas

- HTML5, CSS3
- JavaScript (ES6 Modules)
- [Google Fonts: Lato](https://fonts.google.com/specimen/Lato)
- API REST para backend (configurable en [`js/env.js`](js/env.js))
