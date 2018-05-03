import express from 'express';
import users from './users';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);