/// importuojami moduliai
import express from 'express';

/// isnaudojami importuoti moduliai 
const home = express.Router();

/// get route i home puslapi 
home.get('/', async (req, res) => {
    res.render('home', { page: 'home', css: 'home.css' })
})

// home.get('/', (req, res) => {

// })


/// exportuojamas route
export default home