package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    @Query("from User u where u.mail = :username")
    User findByUsername(@Param("username") String username);

    //Trae un usuario por mail
    @Query("select u from User u where u.mail like ?1")
    User findUserByMail(String mail);

}
