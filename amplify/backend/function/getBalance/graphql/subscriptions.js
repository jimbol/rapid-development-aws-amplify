"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onUpdateTransaction = exports.onDeleteTransaction = exports.onCreateTransaction = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const onCreateTransaction =
/* GraphQL */
`
  subscription OnCreateTransaction {
    onCreateTransaction {
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
exports.onCreateTransaction = onCreateTransaction;
const onUpdateTransaction =
/* GraphQL */
`
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
exports.onUpdateTransaction = onUpdateTransaction;
const onDeleteTransaction =
/* GraphQL */
`
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
exports.onDeleteTransaction = onDeleteTransaction;