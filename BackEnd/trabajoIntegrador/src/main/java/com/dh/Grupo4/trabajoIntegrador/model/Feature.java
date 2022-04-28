package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name ="features")
@Getter
@Setter
public class Feature {

    //Atributos
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String icon;
}