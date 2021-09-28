import express, { Request, Response } from 'express';
import { factorial } from '../../controllers/algo/factorial';
import { fibo } from '../../controllers/algo/fibonacci';

const app = express();

//factorial
app.get('/factorial/:number', (req: Request, res: Response) => {
    try {
        const n = parseInt(req.params.number);
        const result = factorial(n);
        res.send(result.toString());
    } catch (err) {
        res.send(err);
    }
});