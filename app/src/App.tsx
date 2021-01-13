import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { AccountsPage } from './pages/accounts-page';
import { CustomerPage } from './pages/customer-page';
import { CustomersPage } from './pages/customers-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> 
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/accounts">Accounts</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/customers" component={ CustomersPage } />
            <Route path="/customer/:customerId" component={CustomerPage} />
            <Route path="/customer/:customerId/:accountNo" component={CustomerPage} />
            <Route path="/accounts" component={ AccountsPage } />
            <Route path="/account/:accountNo" component={ AccountsPage } />
            <Route path="/account/:accountNo/:customerNo" component={ AccountsPage } />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
