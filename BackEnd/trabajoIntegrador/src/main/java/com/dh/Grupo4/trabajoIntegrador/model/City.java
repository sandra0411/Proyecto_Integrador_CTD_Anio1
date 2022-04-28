package com.dh.Grupo4.trabajoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name ="cities")
@Getter
@Setter

public class City {

    //Atributos
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String countryName;

}