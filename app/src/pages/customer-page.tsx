import { useParams, useRouteMatch } from "react-router-dom"
import { Button } from "../components/button"

type TCustomerPageParam = {
    customerId: string|null
}

export const CustomerPage = () =>
{
    const { customerId } = useParams() as TCustomerPageParam;

    const onClick = () =>{

    }
    
    return <>
        <h3>Customer id {customerId}</h3>
        <Button caption="Add Account" onClick={onClick}></Button>
    </>
}