import React from 'react';
import Product from '../Product/Product';

const products = [
    {
        image: 'https://i.ibb.co/1LBvyZS/image-32.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$340',
    },
    {
        image: 'https://i.ibb.co/Y0NHcLD/image-33.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$40',
    },
    {
        image: 'https://i.ibb.co/wQ9tpTV/image-34.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$540',
    },
    {
        image: 'https://i.ibb.co/TwdzLKj/image-35.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$640',
    },
    {
        image: 'https://i.ibb.co/ZNRTdtT/image-36.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$320',
    },
    {
        image: 'https://i.ibb.co/LSbHqkV/image-37.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$42',
    },
    {
        image: 'https://i.ibb.co/v1NdLTZ/image-38.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$322',
    },
    {
        image: 'https://i.ibb.co/rmM5qrj/image-39.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$150',
    },
    {
        image: 'https://i.ibb.co/K9yfB8M/image-40.png',
        name: 'Lorem ipsum dolor, sit',
        price: '$890',
    },
]

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-light">
                <form className="form-inline m-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <div className="row">
                {
                    products.map((product, index) => <Product product={product} key={index} />)
                }
            </div>
        </div>
    );
};

export default Home;