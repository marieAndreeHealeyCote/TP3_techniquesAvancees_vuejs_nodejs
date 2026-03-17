require('dotenv').config();
const express = require('express');
const cors = require('cors');
const forfaitRoutes = require('./app/routes/forfaitRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/forfaits', forfaitRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});