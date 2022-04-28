package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.FeatureDTO;
import com.dh.Grupo4.trabajoIntegrador.service.IFeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/features")
public class FeatureController {

    //Inyeccion dependecia
    @Autowired
    IFeatureService featureService;

    //Buscar por id
    @GetMapping("/id/{id}")
    public FeatureDTO readFeatureById(@PathVariable Long id){
        return featureService.readFeatureById(id);
    }

    //Buscar por nombre
    @GetMapping("/name/{name}")
    public FeatureDTO readFeatureByname (@PathVariable String name){
        return featureService.readFeatureByName(name);
    }

    // (NO LOS PIDEN PERO SIRVEN PARA PROBAR LA API EN POSTMAN)
    //Para agregar una caracteristica
    @PostMapping()
    public ResponseEntity<?> createFeature(@RequestBody FeatureDTO featureDTO){
        featureService.createFeature(featureDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Se agrego");
    }

    //Listar las caracteristicas
    @GetMapping("/list")
    public Collection<FeatureDTO> readFeatures(){
        return featureService.readFeatures();
    }


    //Eliminar Feature por name
    @DeleteMapping("/{name}")
    public ResponseEntity<?> deleteFeatureByName(@PathVariable String name) {
        featureService.deleteFeatureByName(name);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted");
    }
}