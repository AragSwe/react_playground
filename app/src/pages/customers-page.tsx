import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from "react-router-dom"
import { CustomerStore, TCustomer } from "../stores/customer-store"
import { CustomerPage } from "./customer-page";

export const CustomersPage = () =>
{
    const customers: TCustomer[] = [
        { id:'mg', name: "Micke" },
        { id:'le', name: "Linnéa" }
    ]
    const match = useRouteMatch();

    return <>
        <ul>
            { customers.map(c => <li><Link to={`${ match.path }/${ c.id }`} >{ c.name }</Link> </li>) }
        </ul>
        <Switch>
            <Route path={`${ match.path }/:customerId`}><CustomerPage /></Route>
        </Switch>
    </>
}