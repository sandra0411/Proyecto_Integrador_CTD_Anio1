package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.City;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.CityDTO;
import com.dh.Grupo4.trabajoIntegrador.repository.ICityRepository;
import com.dh.Grupo4.trabajoIntegrador.service.ICityService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CityService implements ICityService {

    //Inyeccion dependecias
    @Autowired
    ICityRepository cityRepository;

    @Autowired
    ObjectMapper mapper;

    //Implementacion metodos interface
    @Override
    public void createCity(CityDTO cityDTO) {
        City city = mapper.convertValue(cityDTO,City.class);
        cityRepository.save(city);
    }

    @Override
    public Collection<CityDTO> readCities() {
        List<City> cities = cityRepository.findAll();
        Set<CityDTO> cityDTOS =new HashSet<>();
        for (City city: cities) {
            cityDTOS.add(mapper.convertValue(city,CityDTO.class));
        }
        return cityDTOS;
    }
}
