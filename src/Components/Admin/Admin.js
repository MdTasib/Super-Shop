import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const Admin = () => {
    return (
        <div className='row'>
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8">
                hello
            </div>
        </div>
    );
};

export default Admin;