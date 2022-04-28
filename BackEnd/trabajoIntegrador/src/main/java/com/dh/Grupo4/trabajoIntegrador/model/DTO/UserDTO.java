package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class UserDTO {

    private Long id;

    private String name;
    private String last_name;
    private String mail;
    private String password;
    private Role role;
    private Set<Product> favorites;

    public UserDTO() {
    }

    public UserDTO(String name, String last_name, String mail, String password, Role role) {
        this.name = name;
        this.last_name = last_name;
        this.mail = mail;
        this.password = password;
        this.role = role;
    }
}
