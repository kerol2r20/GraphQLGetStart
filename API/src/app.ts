import mongoose = require('mongoose');
import express = require('express');
import bodyParser = require('body-parser');
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { CustomerModel } from './mongoose/Customer';
import schema from './schema';

mongoose.connect('mongodb://localhost/Shop', { useMongoClient: true });

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}))

app.listen(3000);
