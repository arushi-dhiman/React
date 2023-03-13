import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import OrderPlaced from './components/OrderPlaced';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path= "/" exact element ={<Home />}/>
        <Route path= "/cart" exact element = {<Cart />}/>
        <Route path= "/order-placed" exact element = {<OrderPlaced />}/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
        {/*exact is used so that it doesn't route with other routes which also has a slash in this */}