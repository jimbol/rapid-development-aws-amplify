"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransactionIds = void 0;
const getTransactionIds =
/* GraphQL */
`
query GetTransactionIds(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
    startedAt
  }
}
`;
exports.getTransactionIds = getTransactionIds;