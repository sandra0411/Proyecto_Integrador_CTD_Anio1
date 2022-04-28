package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICityRepository extends JpaRepository<City, Long> {
}

