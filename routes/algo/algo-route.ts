import express, { Request, Response } from 'express';
import { factorial } from '../../controllers/algo/factorial';
import { fibo } from '../../controllers/algo/fibonacci';
import { pascalTriangle } from '../../controllers/algo/pascalTriangle';
import { isPalindromeNumber } from '../../controllers/algo/palindromeNumber';
import { reverseWords} from '../../controllers/algo/reverseWordsInString';
import { arraySign } from '../../controllers/algo/signOnProductOfArray';

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

//pascal's triangle
algoRoute.get('/pascal-triangle/:number', (req: Request, res: Response) => {
    try {
        const numRows = parseInt(req.params.number);
        if (!isInteger(numRows)) {
            res.status(400).send(`${req.params.number} is not integer`);
            return;
        }

        const triangles = pascalTriangle(numRows);
        res.json(triangles);
    } catch (err) {
        res.status(400).send(err);
    }
});

//palindrom number
algoRoute.get('/palindrom-number/:number', (req: Request, res: Response) => {
    try {
        const num = parseInt(req.params.number);
        if (!(isInteger(num) && num >= 0)) {
            res.status(400).send(`${req.params.number} must be non-negative integer`);
            return;
        }

        res.send(isPalindromeNumber(num));
    } catch (err) {
        res.status(400).send(err);
    }
});

//reverse words in string
algoRoute.post('/reverse-words-in-string', (req: Request, res: Response) => {
    try {
        const arr: string[] = req.body;
        if (!arr || arr.length === 0) {
            res.status(400).send('Params s lacks');
            return;
        }

        const result: string[] = [];
        for (let s of arr) {
            result.push(reverseWords(s));
        }

        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
});

//sign-on product of an array
algoRoute.post('/signon-product-array', (req: Request, res: Response) => {
    try {
        const arr: number[][] = req.body;
        if (!arr || arr.length === 0) {
            res.status(400).send('Param arr lacks');
            return;
        }

        const result: number[] = [];
        for (let nums of arr) {
            const product = arraySign(nums);
            result.push(product);
        }

        res.send(result);
    } catch (err) {
        res.status(400).send(err);
    }
});