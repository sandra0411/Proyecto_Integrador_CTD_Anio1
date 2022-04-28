package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.FeatureDTO;
import com.dh.Grupo4.trabajoIntegrador.service.impl.FeatureService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class FeatureServiceTest {

    @Autowired
    private FeatureService featureService;

    static FeatureDTO featureTest = new FeatureDTO();

    @BeforeAll
    static void loadTestFeature () {
        featureTest.setId(1L);
        featureTest.setName("Eye Slash");
        featureTest.setIcon("fa fa-eye-slash");
    }

    @Test
    public void createAndReadFeature(){
        featureService.createFeature(featureTest);
        Assert.assertNotNull(featureService.readFeatureById(1L));
    }

    @Test
    public void readFeatures(){
        Assert.assertNotEquals(0, featureService.readFeatures().size());
    }
}
