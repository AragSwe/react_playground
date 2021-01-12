import { observable, action } from 'mobx'
import { act } from 'react-dom/test-utils';

export type TAccount = {
    id: string,
    name: string,
    customerId: string
}

export class AccountStore {
    @observable accounts: TAccount[] = [ { id: "acc1", name: "Account 1", customerId: "mg" }, { id: 'acc2', name: "Account 2", customerId: "le" }];

    @action
    addAccount = (accountName: string, customerId: string) => {
        if (!accountName || !customerId) {
            return;
        }
        this.accounts.push({id:`acc${this.accounts.length}`, customerId, name: accountName});
    }

    @observable
    getCustomerAccounts = (customerId:string):TAccount[] =>
    {
        return this.accounts.filter(a => a.customerId === customerId);
    }
}