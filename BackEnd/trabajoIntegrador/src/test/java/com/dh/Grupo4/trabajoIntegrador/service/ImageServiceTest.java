package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.ImageDTO;
import com.dh.Grupo4.trabajoIntegrador.service.impl.ImageService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class ImageServiceTest {

    @Autowired
    private ImageService imageService;

    @Test
    public void createImage(){
        ImageDTO imageTest = new ImageDTO();
        imageTest.setId(1L);
        imageTest.setTitle("Cocina");
        imageTest.setUrl("http://imagencocina.com");
        imageService.createImage(imageTest);
        Assert.assertTrue(imageTest.getId() != null);
    }

}
