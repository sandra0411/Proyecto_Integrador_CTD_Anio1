package com.dh.Grupo4.trabajoIntegrador.model.DTO;


import com.dh.Grupo4.trabajoIntegrador.model.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter @Setter
public class ProductDTO {

    private Long id;
    private String name;
    private String description;
    private String title_description;
    private String latitude;
    private String longitude;
    private String reference;
    private String address;
    private List<Image> images;
    private Category category;
    private City city;
    private Set<Feature> features;
    private Set<PolicyHealthAndSecurity> policyHealthAndSecurity;
    private Set<PolicyCancellation> policyCancellation;
    private Set<PolicyHouseRules> policyHouseRules;

    public ProductDTO() {
    }


    public ProductDTO(String name, String description, String title_description, String latitude, String longitude, String reference, String address, List<Image> images, Category category, City city, Set<Feature> features, Set<PolicyHealthAndSecurity> policyHealthAndSecurity, Set<PolicyCancellation> policyCancellation, Set<PolicyHouseRules> policyHouseRules) {
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

}
