package com.dh.Grupo4.trabajoIntegrador.controller;


import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyHealthAndSecurityDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.PolicyHealthAndSecurity;
import com.dh.Grupo4.trabajoIntegrador.service.IPolicyHealthAndSecurityService;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/policyhealthandsecurity")
public class PolicyHealthAndSecurityController {

    @Autowired
    IPolicyHealthAndSecurityService iPolicyHealthAndSecurityService;

    @Autowired
    IUserService userService;

    @PostMapping
    public ResponseEntity<?> createPolicyHealthAndSecurityService(@RequestBody PolicyHealthAndSecurityDTO policyHealthAndSecurityDTO){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.

            return new ResponseEntity("Only for admin users.",HttpStatus.UNAUTHORIZED);

        }
        iPolicyHealthAndSecurityService.createPolicyHealthAndSecurityService(policyHealthAndSecurityDTO);
        return new ResponseEntity<PolicyHealthAndSecurity>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public PolicyHealthAndSecurityDTO readCancelPolicy(@PathVariable Long id){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return null;

        }

        return iPolicyHealthAndSecurityService.readHealthSecurityPolicy(id);

    }

    @GetMapping("/list")
    public Collection<PolicyHealthAndSecurityDTO> readAllCancelPolicies(){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return null;

        }

        return iPolicyHealthAndSecurityService.readHealthSecurityPolicies();

    }

    //Trae una politica por descripcion
    @GetMapping("/description/{descriptionHealthAndSecurity}")
    public PolicyHealthAndSecurityDTO readPolicyByDescriptionHealthAndSecurity(@PathVariable String descriptionHealthAndSecurity){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return null;

        }

        return iPolicyHealthAndSecurityService.readPolicyByDescriptionHealthAndSecurity(descriptionHealthAndSecurity);

    }

    //Elimina PolicyHealthAndSecurity por description
    @DeleteMapping("/{descriptionHealthAndSecurity}")
    public ResponseEntity<?>deletePolicyHealthAndSecurityByDescription( @PathVariable String descriptionHealthAndSecurity){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.


            return null;

        }
       iPolicyHealthAndSecurityService.deletePolicyHealthAndSecurityByDescription(descriptionHealthAndSecurity);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted");
    }
}
