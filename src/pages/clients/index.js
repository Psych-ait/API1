import { useRef } from 'react';
import AccountBar from '../components/accountBar/accountBar';
import LateralMenu from '../components/menuComponent/menu';
import './index.scss';


export default function ClientsControl() {


  return (
    <div className="MainApp">
      <LateralMenu />
      <div className='inputs_Tables'>
        < AccountBar />
        <div className='content'>
          <div className='Title'>
            <h4>ÁREA ADMINISTRATIVA</h4>
            <h1>Controle de Clientes</h1>
          </div>

          <section className='newClient'>
            <h1> Novo Cliente </h1>
            <span >
              <label>Nome</label>
              <input type='text' />
            </span>

            <span >
              <label>Email</label>
              <input type='text' />
            </span>

            <span>
              <label>Telefone</label>
              <input type='text' />
            </span>

            <span>
              <label>CPF</label>
              <input type='text' />
            </span>

            <span>
              <label>CNH</label>
              <input type='text' />
            </span>

            <span className='btnSpan'>
              <button> Salvar </button>
            </span>

          </section>

          <section className='ClientsList'>
            <h1>Lista de Clientes</h1>
            <span>
              <label>Nome</label>
              <input type='text' />
            </span>
            <table>
              <colgroup>
                <col style={{ width: 30 + '%' }} />
                <col style={{ width: 20 + '%' }} />
                <col style={{ width: 15 + '%' }} />
                <col style={{ width: 25 + '%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Carlinhos Horsio Cabalo</td>
                  <td>21365161456</td>
                  <td>541651651</td>
                  <td>CarlinhosHorse@gmail.com</td>
                  <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-delete-left"></i></td>
                </tr>
               
              </tbody>
            </table>

          </section>

        </div>
      </div>
    </div >
  );
}
