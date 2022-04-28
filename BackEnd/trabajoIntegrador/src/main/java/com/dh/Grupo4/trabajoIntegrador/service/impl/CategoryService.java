package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.Category;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.CategoryDTO;
import com.dh.Grupo4.trabajoIntegrador.repository.ICategoryRepository;
import com.dh.Grupo4.trabajoIntegrador.service.ICategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;

    public void createCategory(CategoryDTO categoryDTO){

        Category category = mapper.convertValue(categoryDTO, Category.class);
        categoryRepository.save(category);

    }

    public CategoryDTO readCategory (Long id){

        CategoryDTO categoryDTO = null;
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            categoryDTO = mapper.convertValue(category, CategoryDTO.class);
        }
        return categoryDTO;
    }

    public void updateCategory (CategoryDTO categoryDTO){

        Category category = mapper.convertValue(categoryDTO,Category.class);
        categoryRepository.save(category);

    }

    public void deleteCategory (Long id){

        categoryRepository.deleteById(id);

    }

    public Collection<CategoryDTO> readCategories (){

        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoriesDTO = new HashSet<>();

        for(Category category : categories){

            CategoryDTO categoryDTO = new CategoryDTO();

            categoryDTO.setId(category.getId());
            categoryDTO.setTitle(category.getTitle());
            categoryDTO.setDescription(category.getDescription());
            categoryDTO.setUrlimg(category.getUrlimg());

            categoriesDTO.add(categoryDTO);

        }

        return categoriesDTO;

    }

}
