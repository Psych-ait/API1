import AccountBar from '../components/accountBar/accountBar';
import LateralMenu from '../components/menuComponent/menu';
import './index.scss';

function App() {
  return (
    <div className="MainApp">
      <LateralMenu />
      <div className='inputs_Tables'>
        < AccountBar/>
       <h1>HOME</h1>
       <h3>


       '-'
       </h3>
      </div>
    </div >
  );
}

export default App;
