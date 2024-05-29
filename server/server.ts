
import express, { Express, Request, Response, response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { runWarehouseProcesses } from './src/warehouseProcess';


dotenv.config();

const app: Express = express();
const port: number = Number(process.env.SERVER_PORT) || 8080;

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    //console.log("Response : ", res);
    const response = runWarehouseProcesses();
    res.json(response);
});


app.post('/', (req: Request, res: Response) => {
    //console.log("Response : ", req.body);
    const request = req.body;
    //console.log("Response : ", response.json());

    res.send('response from Server...post');

});

app.listen(port, ()=> {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})
