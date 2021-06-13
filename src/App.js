import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Messages from './components/Messages';
import ProdutosPage from './pages/produtos/ProdutosPage';
import FilterContext from './contexts/FilterContext';

function App() {
  const [filter, setFilter] = useState();

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <div className="page-container">
        <Messages></Messages>
        <Header></Header>
        <ProdutosPage></ProdutosPage>
        <Footer></Footer>
      </div>
    </FilterContext.Provider>
  );
}

export default App;
