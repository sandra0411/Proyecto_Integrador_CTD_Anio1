package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.PolicyHealthAndSecurity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IPolicyHealthAndSecurityRepository extends JpaRepository<PolicyHealthAndSecurity, Long> {

    //Trae una politica por descripcion
    @Query("from PolicyHealthAndSecurity p where p.descriptionHealthAndSecurity like :descriptionHealthAndSecurity")
    PolicyHealthAndSecurity getPolicyByDescriptionHealthAndSecurity(@Param("descriptionHealthAndSecurity")String descriptionHealthAndSecurity);

    //Elimina PolicyHealthAndSecurity por description
    @Modifying  //Indica a Spring que puede modificar los registros existentes
    @Query("delete from PolicyHealthAndSecurity p where p.descriptionHealthAndSecurity = :descriptionHealthAndSecurity")
    void deletePolicyHealthAndSecurityByDescription (@Param("descriptionHealthAndSecurity") String descriptionHealthAndSecurity);

}
