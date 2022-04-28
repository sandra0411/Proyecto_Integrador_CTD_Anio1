package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface IImageRepository extends JpaRepository<Image,Long> {


    @Query("select a from Image a where a.title=?1")
    Image findMainHousingByTitle(String title);

    @Query("select a from Image a where a.title like ?1%")
    Collection<Image> findHousingByTitle(String title);

    //Eliminar imagen por title
    @Modifying  //Indica a Spring que puede modificar los registros existentes
    @Query("delete from Image i where i.title = :title")
    void deleteImageByTitle (@Param("title") String title);

}
