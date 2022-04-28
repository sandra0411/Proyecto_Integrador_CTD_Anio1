package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.User;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collection;
import java.util.Optional;
/*
@SpringBootTest
// @SpringBootTest(properties = "spring.main.lazy-initialization=true",classes = {UserService.class})
class UserServiceTest {

    @Autowired
    IUserService iuserService;

    static User userTest = new User();

    @BeforeAll
    static void beforeAll () {
        userTest.setId(1L);
        userTest.setName("Diego");
        userTest.setLast_name("Testa");
        userTest.setMail("diego@testa.com");
        userTest.setPassword("dieguitotesta123");
    }

    @Test
    void createUser() {
        iuserService.createUser(userTest);
        Optional<User> result = iuserService.readUser(1L);
        Assert.assertFalse(result.isEmpty());
        Assert.assertTrue(result.get().getId() == 1L);
    }

    @Test
    void readUser() {
        iuserService.createUser(userTest);
        Optional<User> result = iuserService.readUser(1L);
        Assert.assertFalse(result.isEmpty());
    }

    @Test
    void updateUser() {
        userTest.setName("Dieguito");
        iuserService.updateUser(userTest);
        Optional<User> result = iuserService.readUser(1L);
        Assert.assertFalse(result.isEmpty());
        System.out.println(userTest);
    }

    @Test
    void deleteUser() {
        iuserService.createUser(userTest);
        iuserService.deleteUser(1L);
        Optional<User> result = iuserService.readUser(1L);
        Assert.assertTrue(result.isEmpty());
    }

    @Test
    void readUsers() {
        iuserService.createUser(userTest);
        userTest.setId(2L);
        userTest.setName("Barby");
        userTest.setLast_name("Rodriguez");
        userTest.setMail("barby@rodri.com");
        userTest.setPassword("barbyrodri456");
        iuserService.createUser(userTest);
        Collection<User> result = iuserService.readUsers();
        Assert.assertFalse(result.isEmpty());
        Assert.assertTrue(result.size() == 2);
    }
}
*/