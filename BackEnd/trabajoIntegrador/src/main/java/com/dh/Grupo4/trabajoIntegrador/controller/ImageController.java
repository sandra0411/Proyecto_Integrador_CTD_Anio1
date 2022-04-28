package com.dh.Grupo4.trabajoIntegrador.controller;


import com.dh.Grupo4.trabajoIntegrador.model.DTO.ImageDTO;
import com.dh.Grupo4.trabajoIntegrador.service.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/images")
public class ImageController {

    @Autowired
    IImageService iImageService;


    @PostMapping("/add")
    public ResponseEntity<?> addImage(@RequestBody ImageDTO img) {
        iImageService.createImage(img);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/list/{title}")
    public Collection<ImageDTO> getImages(@PathVariable String title){
        return iImageService.getHousingByTitle(title);
    }

    @GetMapping("{title}")
    public ImageDTO getMainImage(@PathVariable String title){
        return  iImageService.getMainHousingByTitle(title);
    }


    //Eliminar imagen por title
    @DeleteMapping("/{title}")
    public ResponseEntity<?> deleteImageByTitle(@PathVariable String title) {

        iImageService.deleteImageByTitle(title);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted");

    }

}
