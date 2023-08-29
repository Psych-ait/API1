import { Router } from "express";
import { listarcliente,inserir, filtrarnome , deletar} from "../repository/clienteRepository.js";


let endpoints = Router();


endpoints.get('/cliente/listar', async(req,resp) =>{
    let dados = await listarcliente();
    resp.send(dados);
})

endpoints.post('/cliente/inserir', async (req,resp) =>{
    let cliente= req.body;

    let dados= await inserir(cliente);
    resp.send(dados);
})

endpoints.get('/cliente/buscar', async (req, resp) => {
    try {
    let nome= req.query.nome;
    let r = await filtrarnome(nome);
    resp.send(r);
    }
    catch (err) {
    resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
})

endpoints.delete('/contato/:id', async (req, resp) => {
    try {
    let id= req.params.id;
    let r= await deletar(id);
    resp.send();
    }
    catch (err) {
    resp.status(500).send({ erro: 'Ocorreu um erro!'}); }
    })

export default endpoints;