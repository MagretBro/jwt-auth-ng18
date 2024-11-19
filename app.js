const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Подключаем маршруты для аутентификации

const app = express();

// Настройка CORS middleware
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());
// test route
app.get('/', (req, res) => {
    res.send('Welcome')
});

app.use('/api/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API is here: http://localhost:${PORT}`)
});