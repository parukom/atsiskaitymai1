import express from 'express';
import connection from '../sql_connection.js';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import isLoggedIn from '../isLoggedIn.js';

const register = express.Router();
const userSchema = Joi.object({
    email: Joi.string().trim().lowercase().required(),
    nickname: Joi.string().trim().lowercase().required(),
    password: Joi.string().required()
});

register.get('/', async (req, res) => {
    res.render('register', { page: 'register', css: 'register.css' })
})

register.post('/', async (req, res) => {
    let reg = req.body;
    try {
        reg = await userSchema.validateAsync(reg)
    } catch (err) {
        return res.status(500).send({ err: `missing fields` })
    }
    try {
        const hashedPassword = bcrypt.hashSync(reg.password);
        const newUser = await connection.query(`
        INSERT INTO users (email, nickname, password, timestamp)
        VALUES (?,?,?,?)
        `, [reg.email, reg.nickname, hashedPassword, new Date().toLocaleDateString('LT')])
        const token = jwt.sign({ id: newUser[0].insertId, email: reg.email }, process.env.JWT_SECRET)
        return res.cookie('token', token, {
            maxAge: 24 * 60 * 60 * 1000
        }).redirect('/home')
    } catch (err) {
        console.log(err);
        return res.status(500).send(err)
    }
})


export default register;