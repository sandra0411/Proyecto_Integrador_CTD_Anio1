package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.User;

import java.util.Collection;
import java.util.Set;

public interface IUserService {

     void createUser(UserDTO userDTO);

     UserDTO readUser (Long id);

      void updateUser (UserDTO userDTO);

     void deleteUser (Long id);

     Collection<UserDTO> readUsers ();

    //Trae un usuario por mail
    UserDTO findUserByMail (String mail);

    String getEmailUserSession();

    void markFavorite(Long idProduct);

    Set<Product> getFavorites();

    public void save (User user);

}




