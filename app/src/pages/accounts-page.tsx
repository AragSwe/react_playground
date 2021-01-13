import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { AccountInfo } from "../components/account-info";
import { useStores } from "../stores/use-stores"

export const AccountsPage = () =>
{
    const { customerId, accountNo } = useParams() as { customerId:string|null, accountNo:string|null };
    const { accountStore } = useStores();
    const accounts = (customerId && accountStore.getCustomerAccounts(customerId!))
                    || (accountNo && accountStore.accounts.filter(a => a.id === accountNo!))
                    || accountStore.accounts;
    const match = useRouteMatch();

    /*
    //let customerAccounts = accountStore.getCustomerAccounts(customer!.id);
    const addAccount = () => {
        if ( customer )
            accountStore.addAccount(accountName, customer.id);

        setCustomerAccounts(accountStore.getCustomerAccounts(customer!.id));
        //customerAccounts = accountStore.getCustomerAccounts(customer!.id);
    }
     */
    //<input type="text" value={accountName} onChange={(e: ChangeEvent<HTMLInputElement>) => setAccountName(e.target.value) } placeholder="Type account name here"></input>
    //<Button caption="Add Account" onClick={addAccount}></Button>
    return <>
        <ul>
            { accounts.map(a => <li key={a.id}><AccountInfo account={a} expand={ true } /></li>) }
        </ul>
        <Switch>
            <Route path={`${ match.url }/:accountNo`}>hej</Route>
        </Switch>
    </>
}