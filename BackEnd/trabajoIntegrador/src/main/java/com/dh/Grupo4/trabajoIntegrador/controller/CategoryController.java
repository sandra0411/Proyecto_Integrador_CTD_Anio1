package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.CategoryDTO;
import com.dh.Grupo4.trabajoIntegrador.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @PostMapping()
    public ResponseEntity<?> addCategory(@RequestBody CategoryDTO categoryDTO){

        categoryService.createCategory(categoryDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public CategoryDTO readCategory(@PathVariable Long id){

        return categoryService.readCategory(id);

    }

    @PutMapping
    public ResponseEntity<?> updateCategory(@RequestBody CategoryDTO categoryDTO) {

        ResponseEntity<?> response = null;

        if (categoryDTO.getId() != null && categoryService.readCategory(categoryDTO.getId()) != null){
            categoryService.updateCategory(categoryDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){

        categoryService.deleteCategory(id);
        return ResponseEntity.status(HttpStatus.OK).body("deleted.");

    }

    @GetMapping("/list")
    public Collection<CategoryDTO> readCategories (){

        return categoryService.readCategories();

    }

}
