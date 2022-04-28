package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyHealthAndSecurityDTO;
import com.dh.Grupo4.trabajoIntegrador.model.PolicyHealthAndSecurity;
import com.dh.Grupo4.trabajoIntegrador.repository.IPolicyHealthAndSecurityRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IPolicyHealthAndSecurityService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class PolicyHealthAndSecurityService implements IPolicyHealthAndSecurityService {

    @Autowired
    IPolicyHealthAndSecurityRepository iPolicyHealthAndSecurityRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void createPolicyHealthAndSecurityService(PolicyHealthAndSecurityDTO policyHealthAndSecurityDTO) {
        PolicyHealthAndSecurity policyHealthAndSecurity = mapper.convertValue(policyHealthAndSecurityDTO, PolicyHealthAndSecurity.class);
        iPolicyHealthAndSecurityRepository.save(policyHealthAndSecurity);
    }

    @Override
    public PolicyHealthAndSecurityDTO readHealthSecurityPolicy(Long id) {

        PolicyHealthAndSecurityDTO policyHealthAndSecurityDTO = null;

        Optional<PolicyHealthAndSecurity> policyHealthAndSecurity = iPolicyHealthAndSecurityRepository.findById(id);
        if (policyHealthAndSecurity.isPresent()){
            policyHealthAndSecurityDTO = mapper.convertValue(policyHealthAndSecurity, PolicyHealthAndSecurityDTO.class);
        }

        return policyHealthAndSecurityDTO;

    }

    @Override
    public Collection<PolicyHealthAndSecurityDTO> readHealthSecurityPolicies() {

        List<PolicyHealthAndSecurity> allHealthSecurityPolicies = iPolicyHealthAndSecurityRepository.findAll();
        Set<PolicyHealthAndSecurityDTO> allHealthSecurityPoliciesDTO = new HashSet<>();

        for (PolicyHealthAndSecurity policy: allHealthSecurityPolicies){

            allHealthSecurityPoliciesDTO.add(mapper.convertValue(policy, PolicyHealthAndSecurityDTO.class));

        }

        return allHealthSecurityPoliciesDTO;

    }

    //Trae una politica por descripcion
    @Override
    public PolicyHealthAndSecurityDTO readPolicyByDescriptionHealthAndSecurity(String descriptionHealthAndSecurity) {
        PolicyHealthAndSecurity policyHealthAndSecurity = iPolicyHealthAndSecurityRepository.getPolicyByDescriptionHealthAndSecurity(descriptionHealthAndSecurity);
        return mapper.convertValue(policyHealthAndSecurity, PolicyHealthAndSecurityDTO.class);

    }

    //Elimina PolicyHealthAndSecurity por description
    @Transactional
    @Override
    public void deletePolicyHealthAndSecurityByDescription(String descriptionHealthAndSecurity) {
        iPolicyHealthAndSecurityRepository.deletePolicyHealthAndSecurityByDescription(descriptionHealthAndSecurity);
    }
}
