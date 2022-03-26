import logo from './logo.svg';
import './App.css';
import Store from './componets/Store/Store';
import Header from './componets/Header/Header';
import Quesion from './componets/Quesion/Quesion';

function App() {
  return (
    <div>
      <Header></Header>
      <Store></Store>
      <Quesion></Quesion>
    </div>
  );
}

export default App;
