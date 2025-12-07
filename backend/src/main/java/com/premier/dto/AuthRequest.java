package com.premier.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthRequest {
    private String nome;
    private String email;
    private String senha;
}
