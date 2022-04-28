package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import com.dh.Grupo4.trabajoIntegrador.model.Product;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter

public class ImageDTO {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String url;

    public ImageDTO() {
    }

    public ImageDTO(String titulo, String url) {
        this.title = titulo;
        this.url = url;
    }


}
