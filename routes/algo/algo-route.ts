import express, { Request, Response } from 'express';
import { factorial } from '../../controllers/algo/factorial';
import { fibo } from '../../controllers/algo/fibonacci';

export const algoRoute = express();

//factorial
algoRoute.get('/factorial/:number', (req: Request, res: Response) => {
    try {
        const n = parseInt(req.params.number);
        if (!isInteger(n)) {
            res.status(400).send(`${req.params.number} is not integer`);
            return;
        }

        const result = factorial(n);
        res.json(result);
    } catch (err) {
        res.status(400).send(err);
    }
});

//fibonacci
algoRoute.get('/fibonacci/:number', (req: Request, res: Response) => {
    try {
        const n = parseInt(req.params.number);
        if (!isInteger(n)) {
            res.status(400).send(`${req.params.number} is not integer`);
            return;
        }

        const result = fibo(n);
        res.json(result);
    } catch (err) {
        res.status(400).send(err);
    }
});

const isNumber = (n: number): boolean => {
    return !isNaN(n);
}

const isInteger = (n: number): boolean => {
    if (!isNumber(n)) return false;
    return n.toString().indexOf(".") === -1;
}