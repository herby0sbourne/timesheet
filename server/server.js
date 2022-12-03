import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import http from 'http';
import Query from './graphql/resolvers/Query.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// console.log(__dirname);
// const typeDefs = loadFilesSync(path.join(__dirname, './graphql/typeDefs/*.graphql'));
// const resolvers = loadFilesSync(path.join(__dirname, './graphql/resolvers/*.js'));

const typeDefs = loadFilesSync('./graphql/typeDefs/*.graphql');
// const resolvers = loadFilesSync('./graphql/resolvers/*.js');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query,
  },
});

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({
      isloggedIn: false,
      token: req.headers.token,
    }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
