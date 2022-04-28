package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyHouseRulesDTO;


import java.util.Collection;

public interface IPolicyHouseRulesService {

    void createPolicyHouseRulesService (PolicyHouseRulesDTO policyHouseRulesDTO);

    public PolicyHouseRulesDTO readHouseRulePolicy (Long id);

    public Collection<PolicyHouseRulesDTO> readHouseRulesPolicies ();

    //Trae una politica por descripcion
    PolicyHouseRulesDTO readPolicyBydescriptionHouseRules(String descriptionHouseRules);

    //Elimina PolicyHouseRules por description
    void deletePolicyHouseRulesByDescription (String descriptionHouseRules);
}
