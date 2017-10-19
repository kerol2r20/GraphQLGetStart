import fs = require('fs');
import path = require('path');
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './graphql/resolvers';

const typeDefs = fs.readFileSync(path.join(__dirname, './graphql/type.gql'), 'utf8');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
