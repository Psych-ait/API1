import 'dotenv/config';
import  Express  from 'express';
import  cors from 'cors';

import clienteController from './controller/clienteController.js'

let servidor = Express();
servidor.use(cors());
servidor.use(Express.json());

servidor.use(clienteController);

servidor.listen(process.env.PORT, ()=> console.log('API SUBIU!!!!'))