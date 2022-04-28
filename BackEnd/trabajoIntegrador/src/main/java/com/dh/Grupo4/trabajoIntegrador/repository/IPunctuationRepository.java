package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.Punctuation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;

@Repository
public interface IPunctuationRepository extends JpaRepository<Punctuation, Long> {


    //Listar puntuaciones de un producto
    @Query("SELECT p FROM Punctuation p where p.product.id = :id")
    ArrayList<Punctuation> findPunctuationsByProductId(@Param("id")Long id);
}
