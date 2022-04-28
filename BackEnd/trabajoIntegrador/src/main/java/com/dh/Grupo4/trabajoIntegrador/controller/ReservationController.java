package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.ReservationDTO;
import com.dh.Grupo4.trabajoIntegrador.service.IReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Date;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    IReservationService iReservationService;

    // Métodos pedidos en la Issue #47 - Sprint 3

    @GetMapping("/list/product/{id}") // Permite encontrar las reservas asociadas a un producto por su Id.
    public Collection<ReservationDTO> findReservationByProductId (@PathVariable Long id) {

        return iReservationService.readReservationByProductId(id);

    }

    //Opcional 4 sprint Issue #61
    @GetMapping("/list/user/{id}") // Permite encontrar las reservas asociadas a un usuario por su Id.
    public Collection<ReservationDTO> findReservationsByUserId (@PathVariable Long id) {
        return iReservationService.findReservationsByUserId(id);
    }


    // Métodos extra que pueden servir para realizar pruebas.

    // Tira error 405.
    @DeleteMapping("/delete/{id}") // Permite borrar una reserva por su id.
    public ResponseEntity<?> deleteReservationById (@PathVariable Long id) {

        iReservationService.deleteReservationById(id);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    // Tira error 404.
    @GetMapping("/{id}")
    public ReservationDTO findReservationById (Long id) { // Permite encontrar una reserva por su id.

        return iReservationService.readReservationById(id);

    }

    @GetMapping("/list")
    public Set<ReservationDTO> findAllReservations () { // Permite traer todas las reservas de la BDD.

        return iReservationService.readReservations();

    }


}
