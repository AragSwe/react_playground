import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom"
import { Button } from "../components/button"
import { useStores } from "../stores/use-stores";

export const CustomerPage = () =>
{
    const { customerId } = useParams() as { customerId: string|null };
    const { customerStore, accountStore } = useStores();

    const customer = customerStore.customers.find(c => c.id === customerId);
    const [accountName, setAccountName] = useState("");
    const [customerAccounts, setCustomerAccounts] = useState(accountStore.getCustomerAccounts(customer!.id));
    //let customerAccounts = accountStore.getCustomerAccounts(customer!.id);

    const addAccount = () => {
        if ( customer )
            accountStore.addAccount(accountName, customer.id);

        setCustomerAccounts(accountStore.getCustomerAccounts(customer!.id));
        //customerAccounts = accountStore.getCustomerAccounts(customer!.id);
    }
    
    return <>
        { !customer && <h3>Customer not found </h3> }
        { customer && <>
            <h3>Customer {customer.name}</h3>
            <ul>{customerAccounts.map(a => <li>{a.name}</li>)}</ul>
            <input type="text" value={accountName} onChange={(e: ChangeEvent<HTMLInputElement>) => setAccountName(e.target.value) } placeholder="Type account name here"></input>
            <Button caption="Add Account" onClick={addAccount}></Button>
            </>
        }
    </>
}