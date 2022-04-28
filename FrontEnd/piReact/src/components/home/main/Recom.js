import React, { useState } from 'react';
import CardRecom from './CardRecom';
import Pagination from './Pagination';

const Recom = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexofFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = products.slice(indexofFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <section className="recom">
                <h2 class="titleRecom">Recomendaciones</h2>
                <div className="cardContainerRecom">
                    {currentProduct.map(function (product, index) {
                        return (
                            <CardRecom key={index} id={product.id} img={product.images[0].url} category={product.category.title} title={product.name} location={product.city.name} description={product.description} features={product.features} product={product} />
                        )
                    })}
                </div>
                <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
            </section>
        </div>
    );
}

export default Recom;