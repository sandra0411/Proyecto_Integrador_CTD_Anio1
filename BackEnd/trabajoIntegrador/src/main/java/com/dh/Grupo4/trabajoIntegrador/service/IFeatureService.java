package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.FeatureDTO;


import java.util.Collection;


public interface IFeatureService {

    //CRUD Feature

    FeatureDTO readFeatureById (Long id);

    FeatureDTO readFeatureByName(String name);

    //NO LOS PIDEN PERO SIRVEN PARA PROBAR LA API EN POSTMAN
    void createFeature (FeatureDTO featureDTO);

    Collection<FeatureDTO> readFeatures();

    //Eliminar Feature por name
    void deleteFeatureByName (String name);
}