// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transaction } = initSchema(schema);

export {
  Transaction
};