const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const users = [{username: 'admin', password: 'password' }];
// Секретный ключ для JWT
const SECRET= 'mysecretkey';

router.get('/', (req, res)=>{
    res.send('Auth api is working')
});

router.get('/login', (req, res) => {
    res.send('This is the login endpoint. Please use POST.');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({username}, SECRET, {expiresIn: '1h'});
        res.json({token});
    }
});
module.exports = router;







