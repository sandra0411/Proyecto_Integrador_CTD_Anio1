package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyHouseRulesDTO;
import com.dh.Grupo4.trabajoIntegrador.model.PolicyHouseRules;
import com.dh.Grupo4.trabajoIntegrador.repository.IPolicyHouseRulesRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IPolicyHouseRulesService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class PolicyHouseRulesService implements IPolicyHouseRulesService {

    @Autowired
    IPolicyHouseRulesRepository policyHouseRulesRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void createPolicyHouseRulesService(PolicyHouseRulesDTO policyHouseRulesDTO) {
        PolicyHouseRules policyHealthAndSecurity = mapper.convertValue(policyHouseRulesDTO, PolicyHouseRules.class);
        policyHouseRulesRepository.save(policyHealthAndSecurity);
    }

    @Override
    public PolicyHouseRulesDTO readHouseRulePolicy(Long id) {

        PolicyHouseRulesDTO policyHouseRuleDTO = null;
        Optional<PolicyHouseRules> policyHouseRule = policyHouseRulesRepository.findById(id);

        if (policyHouseRule.isPresent()){

            policyHouseRuleDTO = mapper.convertValue(policyHouseRule, PolicyHouseRulesDTO.class);

        }

        return policyHouseRuleDTO;

    }

    @Override
    public Collection<PolicyHouseRulesDTO> readHouseRulesPolicies() {

        List<PolicyHouseRules> allHouseRulesPolicies = policyHouseRulesRepository.findAll();
        Set<PolicyHouseRulesDTO> allHouseRulesPoliciesDTO = new HashSet<>();

        for (PolicyHouseRules policy: allHouseRulesPolicies){

            allHouseRulesPoliciesDTO.add(mapper.convertValue(policy, PolicyHouseRulesDTO.class));

        }

        return allHouseRulesPoliciesDTO;

    }

    //Trae una politica por descripcion
    @Override
    public PolicyHouseRulesDTO readPolicyBydescriptionHouseRules(String descriptionHouseRules) {
        PolicyHouseRules policyHouseRules = policyHouseRulesRepository.getPolicyBydescriptionHouseRules(descriptionHouseRules);
        return mapper.convertValue(policyHouseRules, PolicyHouseRulesDTO.class);
    }

    //Elimina PolicyHouseRules por description
    @Transactional
    @Override
    public void deletePolicyHouseRulesByDescription(String descriptionHouseRules) {
        policyHouseRulesRepository.deletePolicyHouseRulesByDescription(descriptionHouseRules);
    }

}