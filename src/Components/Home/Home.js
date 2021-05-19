import React from 'react';
import Product from '../Product/Product';

const products = [
    {
        id: 1,
        image: 'https://i.ibb.co/1LBvyZS/image-32.png',
        name: 'Marks Full Cream Milk Powder Foil',
        price: '$340',
    },
    {
        id: 2,
        image: 'https://i.ibb.co/Y0NHcLD/image-33.png',
        name: 'Moushum Bay Leaves- 200gm',
        price: '$40',
    },
    {
        id: 3,
        image: 'https://i.ibb.co/wQ9tpTV/image-34.png',
        name: 'Onion Local - 1 Kg',
        price: '$540',
    },
    {
        id: 4,
        image: 'https://i.ibb.co/TwdzLKj/image-35.png',
        name: 'Rashid Minicate Rice - 50 Kg',
        price: '$640',
    },
    {
        id: 5,
        image: 'https://i.ibb.co/ZNRTdtT/image-36.png',
        name: 'Omera LPG Refill 12 KG',
        price: '$320',
    },
    {
        id: 6,
        image: 'https://i.ibb.co/LSbHqkV/image-37.png',
        name: 'Bombay Sweets Mr.Twist– 25 gm',
        price: '$42',
    },
    {
        id: 7,
        image: 'https://i.ibb.co/v1NdLTZ/image-38.png',
        name: 'Lifeboy Soap Bar Tota - 100 gm',
        price: '$322',
    },
    {
        id: 8,
        image: 'https://i.ibb.co/rmM5qrj/image-39.png',
        name: 'Ruchi BBQ Chanachur - 350 gm',
        price: '$150',
    },
    {
        id: 9,
        image: 'https://i.ibb.co/K9yfB8M/image-40.png',
        name: 'Parachute Coconut Oil - 200ml',
        price: '$90',
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