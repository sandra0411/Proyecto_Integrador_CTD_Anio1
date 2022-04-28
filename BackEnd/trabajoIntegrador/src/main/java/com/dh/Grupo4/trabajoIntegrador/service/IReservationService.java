package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.ReservationDTO;

import java.util.*;

public interface IReservationService {


    // Métodos pedidos en la Issue #47 - Sprint 3

    public void createReservation(ReservationDTO reservationDTO); // Permite crear una nueva reserva.

    public Collection<ReservationDTO> readReservationByProductId (Long id); // Permite encontrar las reservas asociadas a un producto por su Id.

    //Opcional 4 sprint Issue #61
    Collection<ReservationDTO> findReservationsByUserId(Long id);


    // Métodos extra que pueden servir para realizar pruebas.

    public void deleteReservationById (Long id); // Permite borrar una reserva por su id.

    public ReservationDTO readReservationById (Long id); // Permite encontrar una reserva por su id.

    public Set<ReservationDTO> readReservations (); // Permite traer todas las reservas de la BDD.


}
