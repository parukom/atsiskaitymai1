import express from 'express';

const register = express.Router();


register.get('/register', async (req, res) => {
    res.render('register', { page: 'register' })
});

export default register;