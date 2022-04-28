package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.CityDTO;
import com.dh.Grupo4.trabajoIntegrador.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/cities")
public class CityController {

    //Inyeccion dependecia
    @Autowired
    ICityService cityService;


    //Para agregar una ciudad
    @PostMapping()
    public ResponseEntity<?> createCity(@RequestBody CityDTO cityDTO){
        cityService.createCity(cityDTO);
        return ResponseEntity.status(HttpStatus.OK).body("The city was added");
    }

    //Listar las ciudades
    @GetMapping("/list")
    public Collection<CityDTO> readCities(){
        return cityService.readCities();
    }
}
