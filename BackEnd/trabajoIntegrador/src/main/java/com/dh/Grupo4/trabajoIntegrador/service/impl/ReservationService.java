package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.ReservationDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Reservation;
import com.dh.Grupo4.trabajoIntegrador.repository.IReservationRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IReservationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReservationService implements IReservationService {

    @Autowired
    IReservationRepository iReservationRepository;

    @Autowired
    ObjectMapper mapper;

    // Métodos pedidos en la Issue #47 - Sprint 3

    @Override
    public void createReservation(ReservationDTO reservationDTO) { // Permite crear una nueva reserva.

        Reservation reservation = mapper.convertValue(reservationDTO, Reservation.class);
        iReservationRepository.save(reservation);

    }

    @Override
    public  Collection<ReservationDTO> readReservationByProductId (Long id) { // Permite encontrar las reservas asociadas a un producto por su Id.
        Collection<Reservation> reservations = iReservationRepository.findReservationsByProductId(id);
        Set<ReservationDTO> reservationDTOS = new HashSet<>();
        for (Reservation reservation : reservations) {
            reservationDTOS.add(mapper.convertValue(reservation, ReservationDTO.class));
        }
        return reservationDTOS;
    }

    //Opcional 4 sprint Issue #61
    @Override
    public  Collection<ReservationDTO> findReservationsByUserId (Long id) {
        Collection<Reservation> reservations = iReservationRepository.findReservationsByUserId(id);
        Set<ReservationDTO> reservationDTOS = new HashSet<>();
        for (Reservation reservation : reservations) {
            reservationDTOS.add(mapper.convertValue(reservation, ReservationDTO.class));
        }
        return reservationDTOS;
    }


    // Métodos extra que pueden servir para realizar pruebas.

    @Override
    public void deleteReservationById (Long id) { // Permite borrar una reserva por su id.

        iReservationRepository.deleteById(id);

    }

    @Override
    public ReservationDTO readReservationById (Long id) { // Permite encontrar una reserva por su id.

        Optional<Reservation> reservation = iReservationRepository.findById(id.longValue());
        return mapper.convertValue(reservation, ReservationDTO.class);

    }

    @Override
    public Set<ReservationDTO> readReservations () { // Permite traer todas las reservas de la BDD.

        List<Reservation> reservations = iReservationRepository.findAll();
        Set<ReservationDTO> reservationDTOS = new HashSet<>();
        for (Reservation reservation : reservations) {
            reservationDTOS.add(mapper.convertValue(reservation, ReservationDTO.class));
        }
        return reservationDTOS;

    }

}
