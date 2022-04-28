package com.dh.Grupo4.trabajoIntegrador.controller;


import com.dh.Grupo4.trabajoIntegrador.model.DTO.ProductDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.PunctuationDTO;
import com.dh.Grupo4.trabajoIntegrador.service.ICategoryService;
import com.dh.Grupo4.trabajoIntegrador.service.IProductService;
import com.dh.Grupo4.trabajoIntegrador.service.IPunctuationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/products")
public class ProductController {

    @Autowired
    IProductService productService;

    @Autowired
    IPunctuationService punctuationService;

    @Autowired
   ICategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO) {
        productService.createProduct(productDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ProductDTO readProduct(@PathVariable Long id){
        return productService.readProduct(id);
    }

    @PutMapping
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO) {
        ResponseEntity<?> response = null;
        if (productDTO.getId() != null && productService.readProduct(productDTO.getId()) != null){
            productService.updateProduct(productDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){
        ResponseEntity<String> response = null;
        if(productService.readProduct(id) != null){
            productService.deleteProduct(id);
            response = ResponseEntity.status(HttpStatus.OK).body("Deleted");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @GetMapping("/list")
    public Collection<ProductDTO> readProducts(){
        return productService.readProducts();
    }

    // Filtro por ciudad
    @GetMapping("/listcity/{name}")
    public Collection<ProductDTO> findProductByCity(@PathVariable String name){
        return productService.findProductByCity(name);
    }

    // Filtro por categoría
    @GetMapping("/listcategory/{title}")
    public Collection<ProductDTO> findProductByCategory(@PathVariable String title){
        return productService.findProductByCategory(title);
    }

    //Filtro por ciudad y fechas
    //EJEMPLO URL products/listcitydate/2021-11-06/2022-08-01/Salta
    @GetMapping("/listcitydate/{startDate}/{finalDate}/{name}")
    public Collection<ProductDTO> findProductByCityAndDate(@PathVariable("startDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
                                                           @PathVariable("finalDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date finalDate,
                                                           @PathVariable("name") String name)
    {
        return productService.findProductByDateAndCity(startDate,finalDate,name);
    }

    //Filtro por fechas
    @GetMapping("/listcitydate/{startDate}/{finalDate}")
    public Collection<ProductDTO> findProductByDate(@PathVariable("startDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
                                                           @PathVariable("finalDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date finalDate)

    {
        return productService.findProductByDate(startDate,finalDate);
    }

    //Listar puntuaciones de un producto
    @GetMapping("/list/punctuation/{id}")
    public ArrayList <PunctuationDTO> findPunctuationsByProductId(@PathVariable Long id){

        return punctuationService.findPunctuationsByProductId(id);
    }

    //Obtener promedio puntuaciones por id producto
    @GetMapping("/list/punctuation/average/{id}")
    public double average(@PathVariable Long id){
        List<PunctuationDTO> punctuations = punctuationService.findPunctuationsByProductId(id);
        Integer suma =0;
        float prom = 0;
        for(PunctuationDTO punctuationDTO: punctuations){
            suma += punctuationDTO.getScore();
        }
        if(punctuations.size() > 0){
        prom = (float)suma/punctuations.size();
        return Math.round(prom * 100d) / 100d;
        }else{
            return 0;
        }
    }

    //Cantidad de productos por categoria
    @GetMapping("/sumproducts/{title}")
    public int numberOfProductsByCategories(@PathVariable String title){
        Collection<ProductDTO> products = productService.findProductByCategory(title);
        int suma =0;
        for(int i = 0; i <products.size(); i++){
            suma++;
        }
        return suma;
    }

}
