package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PolicyHouseRulesDTO {

    private Long id;
    private String descriptionHouseRules;

    public PolicyHouseRulesDTO(){}

    public PolicyHouseRulesDTO(String descriptionHouseRules){

        this.descriptionHouseRules = descriptionHouseRules;

    }

}
