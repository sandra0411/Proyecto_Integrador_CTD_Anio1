import React from "react";
import CardCategory from "./CardCategory";


function Categories({categories, handleSelectCategory}) {
    return (

        <>
            <section className="categories" >
                <h2 className="titleCategories">Buscar por tipo</h2>
                <div className="cardsContainer">
                    {categories.map(function (category) {
                        return (
                            <CardCategory img={category.urlimg} type={category.title} handleSelectCategory={handleSelectCategory} />
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Categories;