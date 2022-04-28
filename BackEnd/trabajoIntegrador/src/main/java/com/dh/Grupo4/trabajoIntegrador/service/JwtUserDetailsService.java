package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.ReservationDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Reservation;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import com.dh.Grupo4.trabajoIntegrador.repository.IReservationRepository;
import com.dh.Grupo4.trabajoIntegrador.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IReservationRepository reservationRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getMail(), user.getPassword(),
                new ArrayList<>());
    }

    public Reservation createReservation(ReservationDTO reservation) {

        Reservation newReservation = new Reservation();
        newReservation.setStartTime(reservation.getStartTime());
        newReservation.setStartDate(reservation.getStartDate());
        newReservation.setFinalDate(reservation.getFinalDate());
        newReservation.setUser(reservation.getUser());
        newReservation.setProduct(reservation.getProduct());
        return reservationRepository.save(newReservation);

    }


    public User createUser(UserDTO userDTO){
        User newUser = new User();
        newUser.setName(userDTO.getName());
        newUser.setLast_name(userDTO.getLast_name());
        newUser.setMail(userDTO.getMail());
        newUser.setPassword(userDTO.getPassword());
        newUser.setRole(userDTO.getRole());
        return userRepository.save(newUser);
    }
}
