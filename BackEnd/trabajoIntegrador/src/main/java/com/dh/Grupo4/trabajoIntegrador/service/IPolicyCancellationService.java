package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyCancellationDTO;


import java.util.Collection;

public interface IPolicyCancellationService {

    public void createCancellationPolicy (PolicyCancellationDTO policyCancellationDTO);

    public PolicyCancellationDTO readCancelPolicy (Long id);

    public Collection<PolicyCancellationDTO> readCancelPolicies ();

    //Trae una politica por descripcion
    PolicyCancellationDTO readPolicyCancellationByDescription(String description);

    //Elimina PolicyCancellation por description
    void deletePolicyCancellationByDescription (String description);
}
