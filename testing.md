# TESTING ON REACTJS

## **Instalaciones**

AÑADIR JEST A VITE

    npm install --save-dev jest

---

AUTOCOMPLETADO EN JEST

    npm i @types/jest --save-dev

---

INSTALAR BABEL

    npm install --save-dev babel-jest @babel/core @babel/preset-env

---

FETCH

Para usar fetch con jest es necesario instalarlo y crear archivos de config y setup

    npm i whatwg-fetch --save-dev

REACT TESTING LIBRARY

    npm install --save-dev @testing-library/react

https://testing-library.com/docs/react-testing-library/intro/

---

Renderizar componentes de react

    npm install --save-dev jest-environment-jsdom

    npm install --save-dev @babel/preset-react

---

INSTALAR PROPTYPES PARA JEST

    npm i prop-types

---

## **Configuraciones**

Añadir comando al package.json en la parte de scripts

    "scripts: {
        ...
        "test": "jest --watchAll"

    "test": "jest"                  se ejecuta una sola vez

    "test": "jest --watchAll"       espera los cambios

---

CREAR ARCHIVO BABEL en la raíz del proyecto y pegar config

babel.config.cjs

    module.exports = {
        presets: [
            ['@babel/preset-env', {
                targets: { node: 'current' }
            }],
            ['@babel/preset-react', { runtime: 'automatic' }]
        ],
    };

https://jestjs.io/docs/getting-started#using-babel

---

Archivo config JEST

jest.config.cjs

    module.exports = {
        testEnvironment: 'jest-environment-jsdom',
        setupFiles: ['./jest.setup.js']
    }

---

Archivo setup JEST

jest.setup.js

    // En caso de necesitar la implementación del FetchAPI
    import 'whatwg-fetch';

}

---

## **EJECUTAR / CORRER**

EJECUTAR JEST EN LA TERMINAL

    npm run test

---

##### NOTA: Para hacer pruebas debemos exportar las funciones que van a ser testeadas

---

### **Trabajando con jest en la terminal**

Jest por defecto ejecuta todas las pruebas de la carpeta, para seleccionar una en especifico
presionar w para mostrar las opciones ó presionar p para filtrar por nombre de archivo

ACTUALIZAR SNAPSHOT, presionar la tecla u

### **Trabajando con jest en la códgio**

Para comparar objetos usar

    toStrictEqual o toEqual
