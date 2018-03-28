import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import cors from 'cors';

import schema from './data/schema';

const PORT = 8080;

const app = express();

app.use('*', cors());

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql', // if you want GraphiQL enabled
  subscriptionsEndpoint: `ws://localhost:${PORT}/websocket`,
}));

// Wrap the Express server
const ws = createServer(app);
ws.listen(PORT, () => {
  console.log(`Apollo Server is now running on http://localhost:${PORT}`);
  // Set up the WebSocket for handling GraphQL subscriptions
  // eslint-disable-next-line
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
    server: ws,
    path: '/websocket',
  });
});
