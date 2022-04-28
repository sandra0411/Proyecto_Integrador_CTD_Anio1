package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter

public class CategoryDTO {

    private Long id;
    private String title;
    private String description;
    private String urlimg;

    public CategoryDTO(String title, String description, String urlimg) {
        this.title = title;
        this.description = description;
        this.urlimg = urlimg;
    }

    public CategoryDTO(){}
}
