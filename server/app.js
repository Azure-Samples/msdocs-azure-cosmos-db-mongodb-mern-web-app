import express from 'express';
import cors from 'cors';
import open from 'open';
import {} from 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import productRoutes from './routes/product.js';

app.use(productRoutes);

import connection from './mongodb/connection.js';

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connection.connectToCluster();
    await open(`http://localhost:${port}/products`);
});