import express from 'express';
import 'dotenv/config';
import { algoRoute } from '../routes/algo/algo-route';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/algo', algoRoute);

app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
});