package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyCancellationDTO;
import com.dh.Grupo4.trabajoIntegrador.model.PolicyCancellation;
import com.dh.Grupo4.trabajoIntegrador.repository.IPolicyCancellation;
import com.dh.Grupo4.trabajoIntegrador.service.IPolicyCancellationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class PolicyCancellationService implements IPolicyCancellationService {

    @Autowired
    IPolicyCancellation iPolicyCancellation;

    @Autowired
    ObjectMapper mapper;

    public void createCancellationPolicy (PolicyCancellationDTO policyCancellationDTO) {
        iPolicyCancellation.save(mapper.convertValue(policyCancellationDTO, PolicyCancellation.class));
    }

    @Override
    public PolicyCancellationDTO readCancelPolicy(Long id) {

        PolicyCancellationDTO policyCancellationDTO = null;

        Optional<PolicyCancellation> policyCancellation = iPolicyCancellation.findById(id);
        if (policyCancellation.isPresent()){
            policyCancellationDTO = mapper.convertValue(policyCancellation, PolicyCancellationDTO.class);
        }

        return policyCancellationDTO;

    }

    @Override
    public Collection<PolicyCancellationDTO> readCancelPolicies() {

        List<PolicyCancellation> allCancelPolicies = iPolicyCancellation.findAll();
        Set<PolicyCancellationDTO> allCancelPoliciesDTO = new HashSet<>();

        for (PolicyCancellation policy: allCancelPolicies){

            allCancelPoliciesDTO.add(mapper.convertValue(policy, PolicyCancellationDTO.class));

        }

        return allCancelPoliciesDTO;
    }


    //Trae una politica por descripcion
    @Override
    public PolicyCancellationDTO readPolicyCancellationByDescription(String description) {
        PolicyCancellation policyCancellation = iPolicyCancellation.getPolicyByDescription(description);
        return mapper.convertValue(policyCancellation, PolicyCancellationDTO.class);
    }

    //Elimina PolicyCancellation por description
    @Transactional
    @Override
    public void deletePolicyCancellationByDescription(String description) {
        iPolicyCancellation.deletePolicyCancellationByDescription(description);
    }

}
