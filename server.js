import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';

const GRAPHQL_PORT = 8080;

var graphQLServer = express();
graphQLServer.use('/', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  mocks: { String: () => 'It works!' },
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
