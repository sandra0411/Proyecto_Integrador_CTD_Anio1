package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter @Setter
public class ReservationDTO {

    private Long id;
    private Integer startTime;
    private Date startDate;
    private Date finalDate;
    private Boolean vaccinated;
    private String sellerData;
    private Product product;
    private User user;


    public ReservationDTO() {
    }

    public ReservationDTO(Integer startTime, Date startDate, Date finalDate, Boolean vaccinated, String sellerData, Product product, User user) {
        this.startTime = startTime;
        this.startDate = startDate;
        this.finalDate = finalDate;
        this.vaccinated = vaccinated;
        this.sellerData = sellerData;
        this.product = product;
        this.user = user;
    }

}
