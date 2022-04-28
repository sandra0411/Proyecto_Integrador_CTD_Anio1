import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Policies from "../components/product_detail/product_policies";



describe('<Policies />', () => {

    test('contenido renderizado', () => {
        const product = {
            address: "1075 Darwin, Esquel, Argentina",
            category: { id: 4, title: 'Cabañas', description: 'Las mejores cabañas ', urlimg: 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto1.jpg' },
            city: { id: 9, name: 'Esquel', countryName: 'Argentina' },
            description: "El alojamiento ofrece WiFi, jardín y aparcamiento privado gratuito.La casa tiene 2 dormitorios, TV de pantalla plana por cable y cocina totalmente equipada con microondas, nevera, lavadora, horno y fogones. Se proporcionan toallas y ropa de cama. El aeropuerto más cercano es el de Esquel, ubicado a 16 km. ",
            features: [{ id: 1, name: 'Cocina', icon: 'fas fa-sink' }],
            id: 9,
            images: [],
            latitude: "-42.914451",
            longitude: "-71.330587",
            name: "Cabañas Kaiken Lauquen",
            policyCancellation: [],
            policyHealthAndSecurity: [],
            policyHouseRules: [],
            reference: "A 5 km de la estación de esquí de La Hoya",
            title_description: "Cabañas Kaiken Lauquen en Esquel"
        }

        const component = render(<Policies product={product} />);
        component.getByText('Qué tenés que saber')
    })

})

