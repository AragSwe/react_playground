import { Link, useRouteMatch } from "react-router-dom";
import { TAccount } from "../stores/account-store";

export const AccountInfo = (props: { account: TAccount, expand:boolean }) =>
{
    const match = useRouteMatch();
    return <>
        <h4>{props.account.name}</h4>
        { props.expand && <p> <Link to={`${ match.path }/${ props.account.id }`}>Id: {props.account.id}</Link></p> }
    </>
}