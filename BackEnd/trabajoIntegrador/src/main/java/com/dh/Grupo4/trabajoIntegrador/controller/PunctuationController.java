package com.dh.Grupo4.trabajoIntegrador.controller;


import com.dh.Grupo4.trabajoIntegrador.model.DTO.ProductDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.PunctuationDTO;
import com.dh.Grupo4.trabajoIntegrador.service.IPunctuationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/punctuations")
public class PunctuationController {

    @Autowired
    IPunctuationService punctuationService;


    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody PunctuationDTO punctuationDTO) {
        punctuationService.createPunctuation(punctuationDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
