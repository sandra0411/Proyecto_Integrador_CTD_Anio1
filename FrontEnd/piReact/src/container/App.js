import React, { useState } from "react";
import Main from "../components/home/main/Main";
import { BrowserRouter, Routes, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import FormCreateAccount from '../components/home/main/FormCreateAccount'
import Login from '../components/home/main/login'
import Header from "../components/home/header/Header";
import Footer from "../components/home/footer/Footer";
import Product from "../components/product_detail/product_detail";
import Reservation from "../components/reservation_detail/reservation_detail";
import { UserContextProvider } from "../context/userContext"
import {UserDataContextProvider} from "../context/userDataContext"
import Admin from '../components/admin_new_product/admin_detail';
import MyReservations from '../components/my_reservations/my_reservations_detail';
import PrivateRoute from "../container/PrivateRoute";

const App = () => {

  return (
    <UserContextProvider>
      <UserDataContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/createAccount" element={<><FormCreateAccount /></>} />
            <Route path="/login" element={<><Login /></>} />
            <Route path="product_detail/:productId" element={<Product />} />

          {/*Rutas privadas*/}
            <Route path="/product_detail/:productId/reservation" 
                  element={
                    <PrivateRoute> 
                      <Reservation />
                     </PrivateRoute>
                  } />
            <Route path="/administration" 
                  element={
                    <PrivateRoute> 
                      <Admin />
                     </PrivateRoute>
                  } />
           <Route path="/my_reservations" 
                  element={
                    <PrivateRoute> 
                      <MyReservations />
                     </PrivateRoute>
                  } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserDataContextProvider>
    </UserContextProvider>
  );
}


export default App;
