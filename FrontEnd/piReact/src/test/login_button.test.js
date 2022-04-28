import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Login_button from "../components/home/main/login_button.js";



describe('<login_button />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Login_button />);
       component.getByText('Ingresar')
    })
    
})