// import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import { Transaction } from '../models';
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation, SortDirection } from 'aws-amplify';
import { listTransactions } from '../graphql/queries';
import { createTransaction } from '../graphql/mutations';
import { getTransactionIds } from '../graphql/my-queries';

import Auth from '@aws-amplify/auth';
import Lambda from 'aws-sdk/clients/lambda';



// import { TransactionItem, TransactionItemCollection } from '../ui-components';


const initialState = { amount: '', label: '' };

window.DataStore = DataStore;
export const Transactions = () => {
  const [formState, setFormState] = useState(initialState)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const subscription = DataStore.observeQuery(
      Transaction,
    ).subscribe(snapshot => {
      const { items, isSynced } = snapshot;
      console.log(items);
      setTransactions(items)
    });
    (async () => {

      console.log(await API.get('RESTAPI', '/transactions'));
    })()
    return () => subscription.unsubscribe();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTransactions() {

    const models = await DataStore.query(Transaction);
    console.log(models);

    setTransactions(models)
  }

  async function addTransaction() {
    if (!formState.amount || !formState.label) return
    const transaction = { ...formState }
    setTransactions([...transactions, transaction])
    setFormState(initialState)

    await DataStore.save(
      new Transaction({
        label: transaction.label,
        amount: parseFloat(transaction.amount),
      })
    );
  }

  // async function updateTransaction () {

  //   const original = await DataStore.query(Transaction, "123");

  //   await DataStore.save(
  //     Transaction.copyOf(original, updated => {
  //       updated.amount = 200;
  //     })
  //   );
  // }

  return (
    <div>
      <h2>
        Balance: {
          transactions.reduce((total, { amount }) => parseFloat(total + parseFloat(amount)), 0)
        }
      </h2>

      <h2>Transactions</h2>
      <input
        onChange={event => setInput('label', event.target.value)}

        value={formState.label}
        placeholder="Label"
      />
      <input
        onChange={event => setInput('amount', event.target.value)}

        value={formState.amount}
        placeholder="Amount"
      />
      <button onClick={addTransaction}>Create Transaction</button>
      <hr />
      <div>
        {
          transactions.map((transaction, index) => (
            <div key={transaction.id}>{transaction.label}: {transaction.amount}</div>
          ))
        }
      </div>
      {/* <div>
        <TransactionItemCollection style={{ alignItems: 'center' }} />
      </div> */}
    </div>
  )
}
