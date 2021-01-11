import { observable, action } from 'mobx'

export type TCustomer = {
    id: string,
    name: string
}

export class CustomerStore {
    @observable customers: TCustomer[] = [ { id: "mg", name: 'Micke' }, { id: 'le', name: "Linnéa" }];
}