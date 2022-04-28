package com.dh.Grupo4.trabajoIntegrador.model.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PolicyHealthAndSecurityDTO {


    private Long id;
    private String descriptionHealthAndSecurity;

    public PolicyHealthAndSecurityDTO() {
    }

    public PolicyHealthAndSecurityDTO(String descriptionHealthAndSecurity) {
        this.descriptionHealthAndSecurity = descriptionHealthAndSecurity;
    }
}
