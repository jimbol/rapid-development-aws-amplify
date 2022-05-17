"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncTransactions = exports.listTransactions = exports.getTransaction = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getTransaction =
/* GraphQL */
`
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      label
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.getTransaction = getTransaction;
const listTransactions =
/* GraphQL */
`
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        amount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.listTransactions = listTransactions;
const syncTransactions =
/* GraphQL */
`
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        label
        amount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncTransactions = syncTransactions;