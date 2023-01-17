const express = require('express');
const app = express();
app.use(express.json());

app.get('/livros', (req, res) => {
    const livros = [
        {
            "id": 1,
            "nome": "Orgulho e Preconceito",
            "autor": "Jane Austen",
            "ISBN": "000-0-00-000000-0"
        },
        {
            "id": 2,
            "nome": "O retrato de Dorian Gray",
            "autor": "Oscar Wild",
            "IBSN": "111-1-11-111111-1"
        },
        {
            "id": 3,
            "nome": "Carta ao pai",
            "autor": "Kafka",
            "IBSN": "222-2-22-222222-2"
        }
    ];
    res.json(livros);
});

app.get('/livros/:id', (req, res) => {
    const idLivro = req.params;
    res.json(idLivro);
});

app.put('/livros/:id', (req, res) => {
    const idLivro = req.params;
    res.json(req.body);
});

app.listen(8080, () => {
    console.log('Servidor Funcionando!');
});