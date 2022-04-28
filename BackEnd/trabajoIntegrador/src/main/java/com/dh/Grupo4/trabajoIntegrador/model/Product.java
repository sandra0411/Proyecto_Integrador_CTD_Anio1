package com.dh.Grupo4.trabajoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "products")
@Getter @Setter
public class Product {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Column(length = 10000)
    private String description;

    private String title_description;
    private String latitude;
    private String longitude;
    private String reference;
    private String address;

    @OneToMany
    @JoinColumn(name = "product_id")
    private List<Image> images;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @ManyToMany
    @JoinTable(name = "product_feature",
            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_feature")
    )
    private Set<Feature> features;

    @OneToMany(mappedBy = "product")// Relación bidireccional
    @JsonIgnore
    private Set<Reservation> reservation;

    @OneToMany(mappedBy = "product") // Relacion bidireccional
    @JsonIgnore
    private Collection<Punctuation> punctuation;

    @ManyToMany
    @JoinTable(name = "product_policies_health_and_security",
            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_policies_health_and_security")
    )
    private Set<PolicyHealthAndSecurity> policyHealthAndSecurity;

    @ManyToMany
    @JoinTable(name = "product_policies_cancellation",
            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_policies_cancellation")
    )
    private Set<PolicyCancellation> policyCancellation;

    @ManyToMany
    @JoinTable(name = "product_policies_house_rules",
            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_policies_house_rules")
    )
    private Set<PolicyHouseRules> policyHouseRules;

    public Product() {
    }


    public Product(String name, String description, String title_description, String latitude, String longitude, String reference, String address, List<Image> images, Category category, City city, Set<Feature> features, Set<PolicyHealthAndSecurity> policyHealthAndSecurity, Set<PolicyCancellation> policyCancellation, Set<PolicyHouseRules> policyHouseRules) {
        this.name = name;
        this.description = description;
        this.title_description = title_description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.reference = reference;
        this.address = address;
        this.images = images;
        this.category = category;
        this.city = city;
        this.features = features;
        this.policyHealthAndSecurity = policyHealthAndSecurity;
        this.policyCancellation = policyCancellation;
        this.policyHouseRules = policyHouseRules;
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", title_description='" + title_description + '\'' +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", reference='" + reference + '\'' +
                ", address='" + address + '\'' +
                ", images=" + images +
                ", category=" + category +
                ", city=" + city +
                ", features=" + features +
                '}';
    }


}