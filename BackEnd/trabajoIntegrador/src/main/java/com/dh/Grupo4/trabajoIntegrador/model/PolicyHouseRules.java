package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "policies_house_rules")
@Getter
@Setter

public class PolicyHouseRules {

    @Id
    @GeneratedValue//(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 10000)
    private String descriptionHouseRules;


    public PolicyHouseRules() {
    }

    public PolicyHouseRules(String descriptionHouseRules) {
        this.descriptionHouseRules = descriptionHouseRules;
    }

}