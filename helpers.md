# **Helpers Programming**

### **Regular Expressions (JavaScript)**

### E-mail

    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

[For other languages](https://emailregex.com/)

### Proper names

    /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

[Other expressions](https://aprende-web.net/javascript/js13_3.php)

## **ID Generator**

    //generates random id;
    let guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    console.log(guid());
    //"c2181edf-041b-0a61-3651-79d671fa3db7"

[URL](https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/#:~:text=Javascript%20does%20not%20have%20any,to%20generate%20unique%20random%20ids)

---

## **ID Generator #2**

    const generarID = () => {
        const random = Math.random().toString(32).substring(2);
        const fecha = Date.now().toString(32);
        return random + fecha;
    }

---

## **Parse JSON Web Token**

    function parseJwt (token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };

---

## **Get Date**

    // Current date and time in milliseconds
    let currentDate = Date.now();
    let numDate= new Date(currentDate);

---

## **Format Date**

    const formatearFecha = fecha => {
        const fechaNueva = new Date(fecha);

        const opciones = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }

        return fechaNueva.toLocaleDateString('es-ES', opciones);
    }

---

## **Format currency**

    const formatearDinero = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

---

## **Media Queries with JavaScript**

    const mediaQuery = window.matchMedia('(min-width: 768px)');
        if (mediaQuery.matches) {
        // Do something
    }

---

## **JSON SERVER**

WINDOWS: RUN WINDOWS POWERSHELL AS ADMINISTRATOR AND USE THE FOLLOWING COMMAND

    npm install -g json-server

    MAC: SUDO npm install -g json-server

put the file in the root project folder: db.json

    json-server --watch db.json --port 4000

http://localhost:4000/users (users is the object's name in the file db.json)

If there's some records, it can be accessed to them by id

http://localhost:4000/users/1

---

## **REDUX templateSlice.js**

    import { createSlice } from '@reduxjs/toolkit'

    export const counterSlice = createSlice({
        name: 'name',
        initialState: {
            count: 0
        },
        reducers: {
            increment: state => {
                state.count += 1
            },
            decrement: state => {
                state.count -= 1
            },
            incrementByAmount: (state, action) => {
                state.count += action.payload
            }
        }
    })

    export const { increment, decrement, incrementByAmount } = counterSlice.actions

    export default counterSlice.reducer
