"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 5001;
// Middleware para analisar o corpo das solicitações
app.use(body_parser_1.default.json());
// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
