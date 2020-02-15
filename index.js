import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import resolvers from './resolvers';
import typeDefs from './schema';
import models from './db/models';

import { getUserIdMIddleware } from './services/user';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(getUserIdMIddleware);

app.use(
  '/graphql',
  cors(),
  graphqlHTTP(req => ({
    schema,
    context: { models, userId: req.userId },
    graphiql: true
  }))
);
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
