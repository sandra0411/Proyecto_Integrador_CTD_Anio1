package com.dh.Grupo4.trabajoIntegrador.model.jwt;

import lombok.Getter;

@Getter //?@Setter

public class JwtResponse {

    private final String jwtToken;

    public JwtResponse(String jwtToken) {

        this.jwtToken = jwtToken;

    }

}
