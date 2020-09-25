import 'reflect-metadata';

import express from 'express';

import routes from './routes';

const app = express();
const port = 3333;

app.use(express.urlencoded());
app.use(routes);

app.get('/', (request, response) =>
  response.json({ message: 'Nome da sua aplicação.' }),
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
