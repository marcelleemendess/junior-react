import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./containers/layout/Header";
import Products from "./containers/Products";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/"  element={<Products/>}/>
            {/* <Route path="/product/:productId" element={<ProductItem />} />           */}
            <Route>404 Not Found!</Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
