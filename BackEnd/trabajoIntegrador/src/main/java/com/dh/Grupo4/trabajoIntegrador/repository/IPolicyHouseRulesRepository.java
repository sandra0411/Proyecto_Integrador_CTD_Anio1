package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.PolicyHouseRules;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IPolicyHouseRulesRepository extends JpaRepository<PolicyHouseRules,Long> {

    //Trae una politica por descripcion
    @Query("from PolicyHouseRules p where p.descriptionHouseRules like :descriptionHouseRules")
    PolicyHouseRules getPolicyBydescriptionHouseRules(@Param("descriptionHouseRules")String descriptionHouseRules);


    //Elimina PolicyHouseRules por description
    @Modifying  //Indica a Spring que puede modificar los registros existentes
    @Query("delete from PolicyHouseRules p where p.descriptionHouseRules = :descriptionHouseRules")
    void deletePolicyHouseRulesByDescription (@Param("descriptionHouseRules") String descriptionHouseRules);
}
