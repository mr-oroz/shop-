import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import data from './data/products.json';
import Product from './components/product';

const App = () => {
    const [product, setProduct] = useState(data);

    const handleCategoryFilter = (id) => {
        const category = data.filter(elem => elem.category_id === id);
        const newArr = [...category]
        setProduct(newArr);
    }

    const handleClikDiscount =() => {
        const discount = data.filter(elem => elem.discount !== null)
        const newArr = [...discount]
        setProduct(newArr)
    }

    const handleClikHome = () => {
        setProduct(data)
    }

    return (
        <div className='app'>
            <Header
                handleClikDiscount={handleClikDiscount}
                handleClikHome={handleClikHome}
                handleCategoryFilter={handleCategoryFilter}
            />
            <Product product={product} />
        </div>
    )
};

export default App;