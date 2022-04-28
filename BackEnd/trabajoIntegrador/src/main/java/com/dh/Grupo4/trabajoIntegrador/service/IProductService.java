package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.ProductDTO;


import java.util.Collection;
import java.util.Date;

public interface IProductService {

    void createProduct(ProductDTO productDTO);
    void updateProduct(ProductDTO productDTO);
    void deleteProduct(Long id);
    Collection<ProductDTO> readProducts();
    Collection<ProductDTO> findProductByCity(String name);
    Collection<ProductDTO> findProductByCategory(String title);
    ProductDTO readProduct(Long id);

    //Filtro por ciudad y fechas
    Collection<ProductDTO> findProductByDateAndCity(Date startDate, Date finalDate, String name );

    //Filtro fechas
    Collection<ProductDTO> findProductByDate(Date startDate, Date finalDate);

}
