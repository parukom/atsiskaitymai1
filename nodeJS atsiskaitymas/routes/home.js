/// importuojami moduliai
import express from 'express';

/// isnaudojami importuoti moduliai 
const home = express.Router();

/// get route i home puslapi 
home.get('/', (req, res) => {
    res.render('home', { page: 'home', css: 'home.css' })
})




/// exportuojamas route
export default home