package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.PunctuationDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Punctuation;
import com.dh.Grupo4.trabajoIntegrador.repository.IPunctuationRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IPunctuationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class PunctuationService implements IPunctuationService {

    @Autowired
    IPunctuationRepository punctuationRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void createPunctuation(PunctuationDTO punctuationDTO) {
        Punctuation punctuation = mapper.convertValue(punctuationDTO, Punctuation.class);
        punctuationRepository.save(punctuation);
    }

    //Listar puntuaciones de un producto
    @Override
    public ArrayList<PunctuationDTO> findPunctuationsByProductId(Long id) {
        ArrayList<Punctuation> punctuations = punctuationRepository.findPunctuationsByProductId(id);
        ArrayList<PunctuationDTO> punctuationDTOS =new ArrayList<>();
        for (Punctuation punctuation: punctuations) {
            punctuationDTOS.add(mapper.convertValue(punctuation,PunctuationDTO.class));
        }
        return punctuationDTOS;
    }


    }
