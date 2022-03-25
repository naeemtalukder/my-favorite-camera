import logo from './logo.svg';
import './App.css';
import Store from './componets/Store/Store';

function App() {
  return (
    <div>
      <h1 className="header">My Favorite Camera</h1>
      <h3 className='sub-header'>Pick up your favorite camera</h3>
      <Store></Store>
    </div>
  );
}

export default App;
