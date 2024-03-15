import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5001;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Rota de exemplo
app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo à minha API!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});