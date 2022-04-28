package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.config.JwtUtil;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.ReservationDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Reservation;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import com.dh.Grupo4.trabajoIntegrador.model.jwt.JwtRequest;
import com.dh.Grupo4.trabajoIntegrador.model.jwt.JwtResponse;
import com.dh.Grupo4.trabajoIntegrador.repository.IUserRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IReservationService;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import com.dh.Grupo4.trabajoIntegrador.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    IReservationService iReservationService;

    @Autowired
    private IUserRepository iUserRepository;

    @Autowired
    private IUserService userService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;


    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        User user = iUserRepository.findByUsername(authenticationRequest.getUsername());
        try {
            //this.bCryptPasswordEncoder.matches()
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()));
        }catch (Exception e) {
            throw new Exception("Incorrect", e);
        }
        final UserDetails  userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse((jwt)));

    }



    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
   // @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(value = "/reservation") // Permite crear una nueva reserva.
    public ResponseEntity<?> addReservation(@RequestBody ReservationDTO reservationDTO) {

        UserDTO user = userService.findUserByMail(userService.getEmailUserSession());
        Long idRole = user.getRole().getId();

        if (idRole == 2){ // teniendo en cuenta que el rol del admin = 2 en la base de datos.

            return new ResponseEntity("Only for users.",HttpStatus.UNAUTHORIZED); //error 401

        }

        iReservationService.createReservation(reservationDTO);
        return new ResponseEntity<Reservation>(HttpStatus.CREATED);

    }

    @PostMapping(value = "/users") // Permite crear un nuevo usuario
    public ResponseEntity<?> addUser (@RequestBody UserDTO userDTO){
        userService.createUser(userDTO);
        return new ResponseEntity<User>(HttpStatus.CREATED);
    }

}
