package com.dh.Grupo4.trabajoIntegrador.service.impl;


import com.dh.Grupo4.trabajoIntegrador.model.DTO.ProductDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.repository.IProductRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService implements IProductService {

    @Autowired
    IProductRepository productRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public void createProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        productRepository.save(product);
    }

    @Override
    public ProductDTO readProduct(Long id) {
        ProductDTO productDTO = null;
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()){
            productDTO = mapper.convertValue(product, ProductDTO.class);
        }
        return productDTO;
    }

    @Override
    public void updateProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public Collection<ProductDTO> readProducts() {
        List<Product> products = productRepository.findAll();
        Set<ProductDTO> productsDTO = new HashSet<>();
        for(Product product : products){
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productsDTO;
    }

    @Override
    public Collection<ProductDTO> findProductByCity(String name){
        Collection<Product> products = productRepository.findProductByCity(name);
        Set<ProductDTO> productDTOS =new HashSet<>();
        for (Product product: products) {
            productDTOS.add(mapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }


    @Override
    public Collection<ProductDTO> findProductByCategory(String title){
        Collection<Product> products = productRepository.findProductByCategory(title);
        Set<ProductDTO> productDTOS =new HashSet<>();
        for (Product product: products) {
            productDTOS.add(mapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    //Filtro por ciudad y fechas
    @Override
    public Collection<ProductDTO> findProductByDateAndCity(Date startDate, Date finalDate, String name ) {
        Collection<Product> products = productRepository.findProductByDateAndCity(startDate,finalDate,name);
        Set<ProductDTO> productDTOS =new HashSet<>();
        for (Product product: products) {
            productDTOS.add(mapper.convertValue(product,ProductDTO.class));
        }
        return productDTOS;
    }

    //Filtro fechas
    @Override
    public Collection<ProductDTO> findProductByDate(Date startDate, Date finalDate) {
        Collection<Product> products = productRepository.findProductByDate(startDate, finalDate);
        Set<ProductDTO> productDTOS = new HashSet<>();
        for (Product product : products) {
            productDTOS.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productDTOS;
    }

}
