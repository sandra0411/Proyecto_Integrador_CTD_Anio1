package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyHealthAndSecurityDTO;


import java.util.Collection;

public interface IPolicyHealthAndSecurityService {

    void createPolicyHealthAndSecurityService (PolicyHealthAndSecurityDTO policyHealthAndSecurityDTO);

    public PolicyHealthAndSecurityDTO readHealthSecurityPolicy (Long id);

    public Collection<PolicyHealthAndSecurityDTO> readHealthSecurityPolicies ();

    //Trae una politica por descripcion
    PolicyHealthAndSecurityDTO readPolicyByDescriptionHealthAndSecurity(String descriptionHealthAndSecurity);

    //Elimina PolicyHealthAndSecurity por description
    void deletePolicyHealthAndSecurityByDescription (String descriptionHealthAndSecurity);
}
