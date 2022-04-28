package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PolicyCancellationDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.PolicyCancellation;
import com.dh.Grupo4.trabajoIntegrador.service.IPolicyCancellationService;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/cancellationpolicy")
public class PolicyCancellationController {

    @Autowired
    IPolicyCancellationService iPolicyCancellationService;

    @Autowired
    IUserService userService;

    @PostMapping
    public ResponseEntity<?> addCancellationPolicy (@RequestBody PolicyCancellationDTO policyCancellationDTO) {

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.

            return new ResponseEntity("Only for admin users.",HttpStatus.UNAUTHORIZED);

        }

        iPolicyCancellationService.createCancellationPolicy(policyCancellationDTO);
        return new ResponseEntity<PolicyCancellation>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public PolicyCancellationDTO readCancelPolicy(@PathVariable Long id){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.

            //logger?
            return null;

        }

        return iPolicyCancellationService.readCancelPolicy(id);

    }

    @GetMapping("/list")
    public Collection<PolicyCancellationDTO> readAllCancelPolicies(){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.

            return null;

        }
        return iPolicyCancellationService.readCancelPolicies();

    }
    //Trae una politica por descripcion
    @GetMapping("/description/{description}")
    public PolicyCancellationDTO readPolicyCancellationByDescription(@PathVariable String description) {

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.

            return null;

        }
        return iPolicyCancellationService.readPolicyCancellationByDescription(description);
    }

    //Elimina PolicyCancellation por description
    @DeleteMapping("/{description}")
    public ResponseEntity<?>deletePolicyCancellationByDescription(@PathVariable String description){

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 1){ // teniendo en cuenta que el rol del usuario = 1 en la base de datos.

            return new ResponseEntity("Only for admin users.",HttpStatus.UNAUTHORIZED);

        }
        iPolicyCancellationService.deletePolicyCancellationByDescription(description);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted");
    }

}
