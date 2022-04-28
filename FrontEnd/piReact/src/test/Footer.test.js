import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Footer from "../components/home/footer/Footer";



describe('<Footer />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Footer />);
       component.getByText('©2021 Digital Booking')
    })
    
})
