import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import Spinner from './components/Spinner';
import FilterContext from './contexts/FilterContext';
import LoadingContext from './contexts/LoadingContext';
import MessageContext from './contexts/MessageContext';
import useLoading from './hooks/useLoading';
import ProductsPage from './pages/products/ProductsPage';

function App() {
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [addRequest, removeRequest, isLoading] = useLoading();

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          <Spinner></Spinner>
          <div className="page-container">
            <Message></Message>
            <Header></Header>
            <ProductsPage></ProductsPage>
            <Footer></Footer>
          </div>
        </MessageContext.Provider>
      </LoadingContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
