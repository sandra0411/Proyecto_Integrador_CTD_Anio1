package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.CityDTO;

import java.util.Collection;

public interface ICityService {

    //CRUD City

    void createCity (CityDTO cityDTO);

    Collection<CityDTO> readCities();
}
