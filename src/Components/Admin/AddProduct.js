import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {
    return (
        <div className='row'>
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8">
                adding product
            </div>
        </div>
    );
};

export default AddProduct;