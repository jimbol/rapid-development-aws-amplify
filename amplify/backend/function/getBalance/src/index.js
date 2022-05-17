const appsyncUrl = 'https://f5ghnthuvfculo4cqtfypglcly.appsync-api.us-east-2.amazonaws.com/graphql';
const apiKey = 'da2-o77cajrbwbhy3n57ws56xwxkpi';

const { request } = require('./appsyncRequest')
const { createTodo } = require('./graphql/mutations')
const { listTransactions } = require('./graphql/queries')

exports.handler = async (event) => {
  try {
    const result = await request(
      {
        query: listTransactions,
        operationName: 'ListTransactions',
      },
      appsyncUrl,
      apiKey
    )

    console.log(result);
    const balance = result.data.listTransactions.items.reduce((balance, { amount }) => (balance + amount), 0);
    return {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ balance }),
    };
  } catch (error) {
    console.log(error)
  }
}
