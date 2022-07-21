import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import data from './data/products.json';
import Product from './components/product';
import { Container } from 'react-bootstrap';

const App = () => {
    const [product, setProduct] = useState(data);
    const [title, setTitle] = useState('Главная');
    const [input, setInput] = useState('')

    const handleCategoryFilter = (id, title) => {
        const category = data.filter(elem => elem.category_id === id);
        const newArr = [...category]
        setProduct(newArr);
        setTitle(title);
    }

    const handleClikDiscount = () => {
        const discount = data.filter(elem => elem.discount !== null)
        const newArr = [...discount]
        setProduct(newArr)
        setTitle("Скидки")
    }

    const handleClikHome = () => {
        setProduct(data)
        setTitle('Главная')
    }
    const handleSearch =() => {
        const search = data.filter(elem => {
            return elem.title.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) > -1;
        })
        setProduct(search);
        setTitle(`резултать поиска ${input}`)
        setInput('')
    }
    return (
        <div className='app'>
            <Header
                input={input}
                setInput={setInput}
                handleSearch={handleSearch}
                handleClikDiscount={handleClikDiscount}
                handleClikHome={handleClikHome}
                handleCategoryFilter={handleCategoryFilter}
            />
            <Container>
                <h1>product name: {title}</h1>
                <Product product={product} />
            </Container>
        </div>
    )
};

export default App;