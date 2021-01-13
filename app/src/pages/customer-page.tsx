import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom"
import { useStores } from "../stores/use-stores";
import { AccountsPage } from "./accounts-page";

export const CustomerPage = () =>
{
    const { customerId } = useParams() as { customerId: string|null };
    const { customerStore, accountStore } = useStores();

    const customer = customerStore.customers.find(c => c.id === customerId);
    
    return <>
        { !customer && <h3>Customer not found </h3> }
        { customer && <>
            <h3>Customer {customer.name}</h3>
            <AccountsPage />
            </>
        }
    </>
}