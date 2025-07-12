const express = require('express');
const cors = require('cors');
const mysql = require('mysql/promise');;

const app = express();
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "prince",
  database: "conexaoSA",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
app.use(cors());
app.use(express.json());

app.get("/usuarios", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao buscar usuarios" });
  }
});

// app.get('/usuarios/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
//         if (rows.length === 0) {
//             return res.status(404).json({ error: 'Cliente não encontrado' });
//         }
//         res.json(rows[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao buscar cliente' });
//     }
// });

// app.post('/usuarios', async (req, res) => {
//     const { nome, email } = req.body;
//     try {
//         const [result] = await pool.query(
//             'INSERT INTO clientes (nome, email, senha) VALUES (?, ?, ?, ?)',
//             [nome, email]
//         );
//         const [novoCliente] = await pool.query('SELECT * FROM clientes WHERE id = ?', [result.insertId]);
//         res.status(201).json(novoCliente[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao adicionar cliente' });
//     }
// });

// app.put('/usuarios/:id', async (req, res) => {
//     const { id } = req.params;
//     const { nome, email, senha } = req.body;
//     try {
//         const [result] = await pool.query(
//             'UPDATE clientes SET nome = ?,  email = ? WHERE id = ?',
//             [nome, email, id]
//         );
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Cliente não encontrado' });
//         }
//         const [clienteAtualizado] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
//         res.json(clienteAtualizado[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao atualizar cliente' });
//     }
// });

// app.delete('/usuarios/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Cliente não encontrado' });
//         }
//         res.json({ message: 'Cliente deletado com sucesso' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao deletar cliente' });
//     }
// });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
