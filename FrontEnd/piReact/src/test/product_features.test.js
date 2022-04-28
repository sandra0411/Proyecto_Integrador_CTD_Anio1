import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react';
import  Product_features from "../components/admin_new_product/product_features.js";


describe('<Product_features />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Product_features />);
       component.getByText('Agregar atributos')
    })
    
})