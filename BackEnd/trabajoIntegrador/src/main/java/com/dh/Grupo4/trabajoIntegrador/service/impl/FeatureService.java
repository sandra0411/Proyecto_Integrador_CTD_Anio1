package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.FeatureDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Feature;
import com.dh.Grupo4.trabajoIntegrador.repository.IFeatureRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IFeatureService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class FeatureService implements IFeatureService {

    //Inyeccion dependecias
    @Autowired
    IFeatureRepository featureRepository;

    @Autowired
    ObjectMapper mapper;


    //Implementacion metodos interface
    @Override
    public FeatureDTO readFeatureById(Long id) {
        Optional<Feature> feature = featureRepository.findById(id);
        return mapper.convertValue(feature, FeatureDTO.class);
    }

    @Override
    public FeatureDTO readFeatureByName (String name) {
        Feature feature = featureRepository.getFeatureByNameLike(name);
        return mapper.convertValue(feature, FeatureDTO.class);
    }

    //NO LOS PIDEN PERO SIRVEN PARA PROBAR LA API EN POSTMAN
    @Override
    public void createFeature(FeatureDTO featureDTO) {
        Feature feature = mapper.convertValue(featureDTO,Feature.class);
        featureRepository.save(feature);
    }

    @Override
    public Collection<FeatureDTO> readFeatures() {
        List<Feature> features = featureRepository.findAll();
        Set<FeatureDTO> featureDTOS =new HashSet<>();
        for (Feature feature: features) {
            featureDTOS.add(mapper.convertValue(feature,FeatureDTO.class));
        }
        return featureDTOS;
    }

    //Eliminar Feature por name
    @Transactional
    @Override
    public void deleteFeatureByName(String name) {
        featureRepository.deleteFeatureByName(name);
    }
}