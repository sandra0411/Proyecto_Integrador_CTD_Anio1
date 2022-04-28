import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Loading from "../components/loader/loading.js"

describe('<Loading />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Loading />);
       component.getByText('Digital Booking')
    })
    
})
