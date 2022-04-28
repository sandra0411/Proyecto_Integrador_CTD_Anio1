package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "policies_health_and_security")
@Getter
@Setter
public class PolicyHealthAndSecurity {
    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 10000)
    private String descriptionHealthAndSecurity;


    public PolicyHealthAndSecurity() {
    }

    public PolicyHealthAndSecurity(String descriptionHealthAndSecurity) {
        this.descriptionHealthAndSecurity = descriptionHealthAndSecurity;
    }
}
