package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.CityDTO;
import com.dh.Grupo4.trabajoIntegrador.service.impl.CityService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collection;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class CityServiceTest {

    @Autowired
    private CityService cityService;

    static CityDTO cityTest = new CityDTO();

    @BeforeAll
    static void loadTestCity (){
        cityTest.setId(1L);
        cityTest.setName("Buenos Aires");
        cityTest.setCountryName("Argentina");
    }

    @Test
    public void createAndReadCities(){
        cityService.createCity(cityTest);
        Collection<CityDTO> cities = cityService.readCities();
        boolean result = cities.size() > 0;
        Assert.assertTrue(result);
    }
}
