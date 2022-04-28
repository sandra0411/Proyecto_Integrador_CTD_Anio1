package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @Autowired
    ObjectMapper mapper;


    @GetMapping("/{id}")
    public UserDTO readUser(@PathVariable Long id){

        return userService.readUser(id);
    }

    @PutMapping
    public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO){

        ResponseEntity<?> response = null;

        if (userDTO.getId() != null && userService.readUser(userDTO.getId())!= null){
            userService.updateUser(userDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){

        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).body("deleted.");

    }

    @GetMapping("/list")
    public Collection<UserDTO> readUsers (){

        return userService.readUsers();

    }

    //Trae un usuario por mail
    @GetMapping("/mail/{mail}")
    public UserDTO findUserByMail(@PathVariable String mail) {
        return userService.findUserByMail(mail);
    }

    @PostMapping("/favorite/{id}") //Se le pasa el id del producto que se quiere agregar
    public ResponseEntity<?> markFavorite(@PathVariable Long id){

        userService.markFavorite(id);
        String username = userService.getEmailUserSession();
        UserDTO userDTO = findUserByMail(username);
        User user = mapper.convertValue(userDTO, User.class);
        userService.save(user);
        return ResponseEntity.status(HttpStatus.OK).body("Ok.");
    }



    @GetMapping("/favoriteList")
    public Set<Product> getFavorites(){

        return userService.getFavorites();

    }

}
