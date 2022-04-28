import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, useParams } from 'react-router-dom'; 
import Images from './product_images'
import Description from './product_description'
import Location from './product_location'
import ProductLocationHeader from "./product_location_header";
import Policies from "./product_policies"; 
import ProductHeader from "./product_header"; 
import Features from './product_features'; 
import CarouselMain from "./carousel";
import Dates from './product_dates'; 
import Loader from '../../components/loader/loading'
import axios from 'axios';

export default function Product() {
    const [openGallery, setOpenGallery] = useState(false);
    const { productId } = useParams()
    const url = `http://18.190.58.41:8080/products/${productId}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null;

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if (product.error) {
        content = <p>Error</p>
    }

    if (product.loading) {
        content = 
        <> 
        <Loader/>
        </>
    }

    if (product.data) {
        content =
            <>
                <ProductHeader product={product.data} />
                <ProductLocationHeader product={product.data}/>

                <main>
                    <Images product={product.data} setOpenGallery={setOpenGallery} />
                    {openGallery ?
                        <CarouselMain setOpenGallery={setOpenGallery} product={product.data} /> : <></>
                    }
                    <Description product={product.data} />
                    <Features product={product.data} />
                    <Dates productID={productId} />
                    <Location product={product.data} />
                    <Policies product={product.data}/>
                </main>

            </>

    }

    return (
        <div>
            {content}
        </div>
    )

}
