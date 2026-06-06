import express from "express";

const app = express();

app.use(express.json());

// GET - Busca
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post("/item", (req, res) => {
    res.json(req.body);
});

app.delete("/item/:id", (req, res) => {
    res.json({ id: req.params.id });
});

app.put("/item/:id", (req, res) => {
    res.json({ id: req.params.id, ...req.body });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));