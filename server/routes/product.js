import express from 'express';

const routes = express.Router();

import connection from '../mongodb/connection.js';

routes.route('/products/').get(async (request, response) => {
    let database = connection.getDatabase('cosmicworks');
    let collection = database.collection('products');
    
    let result = await collection
        .find({})
        .toArray();

    response.json(result);
});

export default routes;
