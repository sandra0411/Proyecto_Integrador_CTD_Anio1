package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IFeatureRepository extends JpaRepository<Feature, Long> {

    @Query("from Feature f where f.name like %:name%")
    Feature getFeatureByNameLike(@Param("name")String name);


    //Eliminar Feature por name
    @Modifying  //Indica a Spring que puede modificar los registros existentes
    @Query("delete from Feature f where f.name = :name")
    void deleteFeatureByName (@Param("name") String name);
}

