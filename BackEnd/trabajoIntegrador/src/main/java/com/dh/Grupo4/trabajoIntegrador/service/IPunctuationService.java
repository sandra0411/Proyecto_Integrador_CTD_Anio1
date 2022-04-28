package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PunctuationDTO;
import java.util.ArrayList;

public interface IPunctuationService {

    void createPunctuation(PunctuationDTO punctuationDTO);

    //Listar puntuaciones de un producto
    ArrayList<PunctuationDTO> findPunctuationsByProductId(Long id);
}
