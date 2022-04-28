package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.CategoryDTO;

import java.util.Collection;

public interface ICategoryService {

    public void createCategory(CategoryDTO categoryDTO);

    public CategoryDTO readCategory (Long id);

    public void updateCategory (CategoryDTO categoryDTO);

    public void deleteCategory (Long id);

    public Collection<CategoryDTO> readCategories ();

}
