import React from 'react'
import { AccountStore } from './account-store';
import { CustomerStore } from './customer-store';

export const storesContext = React.createContext({
    accountStore: new AccountStore(),
    customerStore: new CustomerStore()
  });

export const useStores = () => React.useContext(storesContext);