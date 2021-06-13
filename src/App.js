import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Messages from './components/Messages';
import Produtos from './pages/Produtos';

function App() {
  return (
    <div className="page-container">
      <Messages></Messages>
      <Header></Header>
      <Produtos></Produtos>
      <Footer></Footer>
    </div>
  );
}

export default App;
