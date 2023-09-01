import './index.scss';
import LateralMenu from '../components/menuComponent/menu';
import AccountBar from '../components/accountBar/accountBar';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function CarsControl() {
  const [tipos, setTipos] = useState([]);

  const [tipoSelecionado, setTipoSelecionado] = useState(0);
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [placa, setPlaca] = useState('');
  const [ano, setAno] = useState('');

  const [busca, setBusca] = useState('');
  const [listaVeiculos, setListaVeiculos] = useState([]);

  const [erro, setErro] = useState('');



  async function buscarVeiculos() {
    let r = await axios.get('http://localhost:5000/veiculo?busca=' + busca);
    setListaVeiculos(r.data);
  }



  async function salvar() {
    try {

      let veiculo = {
        idTipoVeiculo: tipoSelecionado,
        modelo: modelo,
        marca: marca,
        placa: placa,
        ano: ano
      }
  
      let r = await axios.post('http://localhost:5000/veiculo', veiculo);
      alert('Veículo cadastrado com sucesso!');
        
    } catch (err) {
      setErro(err.response.data.erro);  
    }
      
  }


  async function listarTipos() {
    let r = await axios.get('http://localhost:5000/veiculo/tipo');
    setTipos(r.data);
  }

  useEffect(() => {
    //
    listarTipos();
    //
  }, [])
  


  return (
    <div className='CarsMain'>
      <LateralMenu />
      <div className='CarContent'>
        <AccountBar />
        <main>
          <div className='Title'>
            <h4>ÁREA ADMINISTRATIVA</h4>
            <h1>Controle de Veículos</h1>
          </div>

          <section className='newCar'>
            <h1> Novo Veículo </h1>
            <h2>{erro}</h2>
            <span >
              <label>Tipo Veículo</label>
              
              <select id="veiculo" name="veiculo" value={tipoSelecionado} onChange={e => setTipoSelecionado(e.target.value)} >
                <option value={0}> Selecione </option>
                {tipos.map(item =>
                  <option value={item.id}> {item.tipo} </option>  
                )}
      
              </select>
            </span>


            <span >
              <label>Modelo</label>
              <input type='text' value={modelo} onChange={e => setModelo(e.target.value)} />
            </span>

            <span >
              <label>Marca</label>
              <input type='text' value={marca} onChange={e => setMarca(e.target.value)}  />
            </span>

            <span >
              <label>Ano</label>
              <input type='text' value={ano} onChange={e => setAno(e.target.value)}  />
            </span>

            <span >
              <label>Placa</label>
              <input type='text' value={placa} onChange={e => setPlaca(e.target.value)}  />
            </span>

            <span className='btnSpan'>
              <button onClick={salvar}> Salvar </button>
            </span>

          </section>

          <section className='CarsList'>
            <h1>Lista de Veículos</h1>
            <span >
              <label>Modelo, Marca, Placa</label>
              <div className=''  >
                <input type='text' value={busca} onChange={e => setBusca(e.target.value)} />
                <i class="fa-solid fa-magnifying-glass" onClick={buscarVeiculos}></i>
              </div>
            </span>
            <table>
              <colgroup>
                <col style={{ width: 30 + '%' }} />
                <col style={{ width: 15 + '%' }} />
                <col style={{ width: 12 + '%' }} />
                <col style={{ width: 12 + '%' }} />
                <col style={{ width: 20 + '%' }} />
              </colgroup>
              <thead>
                <tr>

                  <th>Modelo</th>
                  <th>Marca</th>
                  <th>Ano</th>
                  <th>Tipo</th>
                  <th>placa</th>
                </tr>
              </thead>
              <tbody>
                {listaVeiculos.map(item =>
                  <tr>
                    <td>{item.modelo}</td>
                    <td>{item.marca}</td>
                    <td>{item.ano}</td>
                    <td>{item.tipo}</td>
                    <td>{item.placa}</td>
                    <td className='btns' style={{ display: 'flex', height: 20 }}>
                      <i class="fa-regular fa-pen-to-square"></i>
                      <i class="fa-solid fa-delete-left"></i>
                    </td>
                  </tr>  
                )}
                
              </tbody>
            </table>

          </section>

        </main>

      </div>
    </div>
  );
}