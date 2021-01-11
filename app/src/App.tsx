import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
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
            <Route path="/customers">
              <CustomersPage />
            </Route>
            <Route path="/customer/:customerId">
              <CustomerPage />
            </Route>
            <Route path="/account">
              <h3>account</h3>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
