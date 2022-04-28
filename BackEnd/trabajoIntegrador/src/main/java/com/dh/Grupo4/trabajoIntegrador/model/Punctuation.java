package com.dh.Grupo4.trabajoIntegrador.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "punctuations")
@Getter
@Setter
public class Punctuation {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name="score")
    private Integer score;

    @ManyToOne// Relacion bidireccional
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne// Relacion unidireccional
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    public Punctuation() {
    }

    public Punctuation(Integer score,Product product,User user ) {
        this.score = score;
        this.product = product;
        this.user = user;
    }

    @Override
    public String toString() {
        return "Punctuation{" +
                "id=" + id +
                ", score=" + score +
                '}';
    }
}
