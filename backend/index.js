const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Message:', { name, email, message });
    res.json({ success: true, message: 'Pesan Anda sudah diterima.' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});