import React from 'react';
import { Row } from 'react-bootstrap'
import ProductCarousel from '../components/ProductCarousel'
const Category = () => {

    return (
        <>
            <ProductCarousel />


            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <div className="card mb-4">

                            <div className="card-header">Categories</div>
                            <div className="list-group list-group-flush">
                                <a href="search/pants" className="list-group-item list-group-item-action">Pants</a>
                                <a href="search/shirt" className="list-group-item list-group-item-action">Shirts</a>
                                <a href="search/shoes" className="list-group-item list-group-item-action">Shoes</a>
                            </div>
                        </div></div></div></div>
            <Row>

            </Row>
        </>
    )
}

export default Category
