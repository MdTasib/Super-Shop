import React from 'react';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-light">
                <form className="form-inline m-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
};

export default Home;