import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from "./containers/layout/Header";
import HomePage from "./containers/pages/HomePage";
import CategoryPage from "./containers/pages/CategoryPage";
import ProductPage from "./containers/pages/ProductPage";
import CartPage from "./containers/pages/CartPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/category" component={CategoryPage} />
            <Route exact path="/category/:id" component={ProductPage} />
            <Route exact path="/cart" component={CartPage}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
