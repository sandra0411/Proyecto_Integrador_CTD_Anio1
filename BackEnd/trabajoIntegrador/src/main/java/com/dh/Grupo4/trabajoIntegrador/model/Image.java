package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="images")
@Getter
@Setter

public class Image {

    @Id
    @GeneratedValue
    private Long id;
    private String title;

    @Column(unique = true)
    private String url;


     public Image() {
     }



    public Image(String title, String url) {
        this.title = title;
        this.url = url;
    }



    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", titulo='" + title + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
