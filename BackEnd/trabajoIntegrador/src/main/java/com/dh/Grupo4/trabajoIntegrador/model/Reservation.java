package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "reservations")
@Getter @Setter
public class Reservation {

    @Id
    @GeneratedValue
    private Long id;

    private Integer startTime;
    private Date startDate;
    private Date finalDate;
    private Boolean vaccinated;
    private String sellerData;

    @ManyToOne // Relación bidireccional
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne//(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    public Reservation() {
    }

    public Reservation(Integer startTime, Date startDate, Date finalDate, Boolean vaccinated, String sellerData, Product product, User user) {
        this.startTime = startTime;
        this.startDate = startDate;
        this.finalDate = finalDate;
        this.vaccinated = vaccinated;
        this.sellerData = sellerData;
        this.product = product;
        this.user = user;
    }
}
