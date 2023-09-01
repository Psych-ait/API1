
import { buscarPorId } from '../repository/tipoVeiculoRepository.js';
import { consultar, inserir } from '../repository/veiculoRepository.js'

import { Router } from 'express';
let endpoints = Router();


endpoints.post('/veiculo', async (req, resp) => {
  try {
    let veiculo = req.body;

    if (!veiculo.modelo)
      throw new Error('Modelo é obrigatório.');

    if (isNaN(veiculo.ano))
      throw new Error('Ano inválido.')

    let r1 = await buscarPorId(veiculo.idTipoVeiculo);
    if (r1.length == 0)
      throw new Error('Tipo do Veículo inválido.');
    
    let r2 = await consultar(veiculo.placa);
    if (r2.length != 0)
      throw new Error('Placa já cadastrada.');
    
    
    let r = await inserir(veiculo);
    resp.send(r);

  } catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})

export default endpoints;