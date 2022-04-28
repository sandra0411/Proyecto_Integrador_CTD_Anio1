package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.ProductDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import com.dh.Grupo4.trabajoIntegrador.repository.IUserRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IProductService;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements IUserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IProductService productService;

    @Autowired
    ObjectMapper mapper;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;


    public UserService(IUserRepository userRepository, ObjectMapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        //this.passwordEncoder = new BCryptPasswordEncoder(12);//strength valor entre 4 y 31, mas grande mas trabajo calcular el hash/encriptado
    }

    public void createUser(UserDTO userDTO){
        User user = mapper.convertValue(userDTO,User.class);
        //Encriptamos password
        String encodedPassword =this.bCryptPasswordEncoder.encode(user.getPassword());
        //Que se establezca password encriptada
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }



    public UserDTO readUser (Long id){
        UserDTO userDTO =null;
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            userDTO = mapper.convertValue(user, UserDTO.class);
        }
        return userDTO;
    }



    public void updateUser (UserDTO userDTO){
        User user = mapper.convertValue(userDTO,User.class);
        userRepository.save(user);
    }

    public void deleteUser (Long id){

        userRepository.deleteById(id);

    }

    public Collection<UserDTO> readUsers (){

        List<User> users = userRepository.findAll();
        Set<UserDTO> userDTOS = new HashSet<>();
        for (User user: users) {
            userDTOS.add(mapper.convertValue(user, UserDTO.class));
        }
        return userDTOS;
    }

    //Trae un usuario por mail
//    @Override
    public UserDTO findUserByMail(String mail) {
       User user = userRepository.findUserByMail(mail);
        return  mapper.convertValue(user, UserDTO.class);
    }

    public User findUserModelByMail(String mail) {

        return  userRepository.findUserByMail(mail);

    }

    public String getEmailUserSession() {
        Authentication user = SecurityContextHolder.getContext().getAuthentication();
        return user.getName();
    }

    @Override
    public void markFavorite(Long idProduct) {

        String userName = getEmailUserSession();
        User user = findUserModelByMail(userName);
        Set<Product> favorites = user.getFavorites();

        ProductDTO productDTO = productService.readProduct(idProduct);

        Product product = mapper.convertValue(productDTO, Product.class);

        if (favorites.contains(product)){

            favorites.remove(product);

        }else{

            favorites.add(product);

        }

        user.setFavorites(favorites);
        userRepository.save(user);

    }

    @Override
    public Set<Product> getFavorites() {

        String userName = getEmailUserSession();
        User user = findUserModelByMail(userName);
        return user.getFavorites();

    }

    @Override
    public void save(User user) {

        userRepository.save(user);

    }

}

