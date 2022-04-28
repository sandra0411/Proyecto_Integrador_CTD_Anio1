package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.PolicyCancellation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IPolicyCancellation extends JpaRepository<PolicyCancellation, Long> {

    //Trae una politica por descripcion
    @Query("from PolicyCancellation p where p.description like :description")
    PolicyCancellation getPolicyByDescription(@Param("description")String description);


    //Elimina PolicyCancellation por description
    @Modifying  //Indica a Spring que puede modificar los registros existentes
    @Query("delete from PolicyCancellation p where p.description = :description")
    void deletePolicyCancellationByDescription (@Param("description") String description);
}
