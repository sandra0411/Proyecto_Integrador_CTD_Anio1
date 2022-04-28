package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PolicyCancellationDTO {

    private Long id;
    private String description;

    public PolicyCancellationDTO() {
    }

    public PolicyCancellationDTO(String description) {
        this.description = description;
    }
}
