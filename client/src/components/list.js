import React, { useEffect, useState } from 'react';
const { REACT_APP_API_ENDPOINT: apiEndpoint } = process.env;

function List() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(`${apiEndpoint}/products/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const products = await response.json();
            setProducts(products);
        }
        getProducts();
        return;
    }, [products.length]);

    const getList = () => products.map(({ _id, name, category, price }) => (
        <tr key={_id}>
            <td>{name}</td>
            <td className="font-monospace">{category}</td>
            <td>{price}</td>
        </tr>
    ));

    return (
        <article>
            <h1 className="display-1">
                Products
            </h1>
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {getList()}
                </tbody>
            </table>
        </article>
    );
}

export default List;