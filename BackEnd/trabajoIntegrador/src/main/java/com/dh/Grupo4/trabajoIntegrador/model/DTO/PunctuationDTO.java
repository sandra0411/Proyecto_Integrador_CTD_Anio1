package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class PunctuationDTO {

    private Long id;
    private Integer score; //score
    private Product product;
    private User user;

    public PunctuationDTO() {
    }

    public PunctuationDTO(Integer score,Product product, User user) {
        this.score = score;
        this.product = product;
        this.user = user;
    }


}