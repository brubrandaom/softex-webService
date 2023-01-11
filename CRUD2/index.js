const express = require("express");
const app = express();
app.use(express.json());

var alunos = [
    {
        "matricula": 1,
        "nome": "Bruna",
        "curso": "Ciência da Computação"
    },
    {
        "matricula": 2,
        "nome": "Carla",
        "curso": "Administração"
    },
    {
        "matricula": 3,
        "nome": "Bela",
        "curso": "Filosofia"
    }
];

app.get('/alunos', (req, res) => {
    res.status(200).send(alunos);
});

app.get('/alunos/:index', (req, res) => {
    if (req.params.index > alunos.length || req.params.index < 0){
        res.status(404).send('Index fora de range');
    } else {
    res.status(200).send(alunos[req.params.index]);
    }
});

app.post('/cadastro', (req,res) => {
    var aluno = req.body;
    alunos.push(aluno);
    res.status(201).send(aluno);
});

app.put('/alunos/:index', (req, res) => {
    alunos[req.params.index] = req.body;
    res.status(200).send(alunos[req.params.index]);    
});

app.delete('/alunos/:index', (req, res) => {
    var index = req.params.index;
    alunos.splice(index, 1);
    res.status(200).send('Recurso deletado com sucesso.');
});

app.listen(8080,() => {
console.log("Servidor funcionando!");
})