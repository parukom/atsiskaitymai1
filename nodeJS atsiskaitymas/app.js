/// importuojami moduliai
import 'dotenv/config';
import express, { urlencoded } from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

/// importuojami route
import home from './routes/home.js'
import register from './routes/register.js';

/// naudojamos const'antos
const app = express();
const PORT = process.env.PORT;
const corsOptions = {
    origin: `http://localhost:${PORT}`,
    optionsSuccessStatus: 200
};

/// nustatomas ejs ir papke is kur bus traukiami failai 
app.set('view engine', 'ejs');
app.set('views', './views');

/// isduodami linkai route'ms
app.use('/', home)
app.use('/register', register)

/// isnaudojami importuoti moduliai
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.resolve('public')));
app.use(urlencoded({ extended: false }));
app.use(cookieParser());



/// serveris vaziuojam
app.listen(PORT, console.log(`serveris vaziuoja ant ${PORT} porto`))