package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;


@Repository
public interface IReservationRepository extends JpaRepository<Reservation, Long>{

    // Se encuentran todas las reservas asociadas a un Producto.
    @Query("SELECT r FROM Reservation r WHERE r.product.id = :id")
    Collection<Reservation> findReservationsByProductId(@Param("id")Long id);

    // Se encuentran todas las reservas asociadas a un usuario.
    @Query("SELECT r FROM Reservation r WHERE r.user.id = :id")
    Collection<Reservation> findReservationsByUserId(@Param("id")Long id);


}
