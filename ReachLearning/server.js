// // import './config';
// // import https from 'https';
// import http from 'http';

// // https.get('https://www.lynda.com', res => {
// //     console.log('Respose Status code: ', res.statusCode);

// //     res.on('data', chunk => {
// //         console.log(chunk.toString());
// //     });
// // });

// const server = http.createServer();

// server.listen(8080);

// server.on('request', (req, res) => {
//     res.write('Hello Http!\n');
//     setTimeout(() => {
//         res.write(' am Stream ! \n');
//         res.end();
//     }, 3000);
// });

import express from 'express';
import config from './config';
import fs from 'fs';
import routerApi from './api'


const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render("index", {
        content: 'Hi this is Harish, My first server render'
    });
});

// server.get('/about.html' , (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

server.use('/api', routerApi);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});