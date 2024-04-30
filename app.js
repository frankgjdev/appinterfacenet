const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const serverIP = os.networkInterfaces();  // Obtiene información de las interfaces de red

    // Filtrar por una interfaz activa y que no sea interna
    let ip = '';
    for (const name of Object.keys(serverIP)) {
        for (const interfaz of serverIP[name]) {
            if (interfaz.family === 'IPv4' && !interfaz.internal) {
                ip = interfaz.address;
                break;
            }
        }
        if (ip) break;
    }

    res.send(Hola Mundo desde el servidor con IP: ${ip});
});

app.listen(port, () => {
    console.log(Server running on http://localhost:${port});
});