
export const getTransactionIds = /* GraphQL */ `
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
