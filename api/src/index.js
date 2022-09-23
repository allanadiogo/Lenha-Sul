import 'dotenv/config'


import express from "express";
import cors from "cors";

import usuarioController from './controller/usuarioController.js'
import postController    from  './controller/postController.js'

const server = express();
server.use(cors());
server.use(express.json());


server.use(postController);
server.use(usuarioController);
 

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("API subiu na porta " + PORT));
