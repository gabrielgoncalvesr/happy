import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: "aaa" });
});

app.listen(3333);