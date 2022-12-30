import express, {Request, Response} from 'express';
import mustache from 'mustache-express';
import path from 'path';
import dotenv from 'dotenv';
import mainRoutes from './routes/routes';

dotenv.config();
const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static('public'))

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Pagina não encontrada')
})

server.listen(process.env.PORT);