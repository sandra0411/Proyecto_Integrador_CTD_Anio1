package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "policies_cancellation")
@Getter @Setter
public class PolicyCancellation {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 10000)
    private String description;

    public PolicyCancellation() {
    }

    public PolicyCancellation(String description) {
        this.description = description;
    }
}
