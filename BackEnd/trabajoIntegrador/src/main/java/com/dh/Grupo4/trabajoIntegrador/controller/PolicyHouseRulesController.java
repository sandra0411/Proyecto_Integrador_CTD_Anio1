package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyHealthAndSecurityDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyHouseRulesDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.PolicyHouseRules;
import com.dh.Grupo4.trabajoIntegrador.service.IPolicyHouseRulesService;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/policyhouserules")

public class PolicyHouseRulesController {

    @Autowired
    IPolicyHouseRulesService houseRulesService;

    @Autowired
    IUserService userService;

    @PostMapping
    public ResponseEntity<?> createPolicyHouseRule(@RequestBody PolicyHouseRulesDTO policyHouseRulesDTO){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.

            return new ResponseEntity("Only for admin users.",HttpStatus.UNAUTHORIZED);

        }

        houseRulesService.createPolicyHouseRulesService(policyHouseRulesDTO);
        return new ResponseEntity<PolicyHouseRules>(HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public PolicyHouseRulesDTO readHouseRulePolicy(@PathVariable Long id){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return null;

        }

        return houseRulesService.readHouseRulePolicy(id);

    }

    @GetMapping("/list")
    public Collection<PolicyHouseRulesDTO> readAllHouseRulesPolicies(){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return null;

        }

        return houseRulesService.readHouseRulesPolicies();

    }

    //Trae una politica por descripcion
    @GetMapping("/description/{descriptionHouseRules}")
    public PolicyHouseRulesDTO readPolicyBydescriptionHouseRules(@PathVariable String descriptionHouseRules){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return null;

        }

        return houseRulesService.readPolicyBydescriptionHouseRules(descriptionHouseRules);

    }

    //Elimina PolicyHouseRules por description
    @DeleteMapping("/{descriptionHouseRules}")
    public ResponseEntity<?>deletePolicyHouseRulesByDescription(@PathVariable String descriptionHouseRules) {

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return new ResponseEntity("Only for admin users.",HttpStatus.UNAUTHORIZED);

        }
        houseRulesService.deletePolicyHouseRulesByDescription(descriptionHouseRules);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted");
    }
}