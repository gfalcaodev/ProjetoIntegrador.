package com.premier.controller;

import com.premier.dto.AuthRequest;
import com.premier.dto.AuthResponse;
import com.premier.model.Usuario;
import com.premier.security.JwtService;
import com.premier.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final UsuarioService usuarioService;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest body) {

        Usuario novo = Usuario.builder()
                .nome(body.getNome())
                .email(body.getEmail())
                .senhaHash(new BCryptPasswordEncoder().encode(body.getSenha()))
                .build();

        usuarioService.salvar(novo);

        return ResponseEntity.ok("Usuário registrado");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req) {

        Usuario user = usuarioService.buscarPorEmail(req.getEmail());

        if (user == null)
            return ResponseEntity.status(401).body("Usuário não encontrado");

        if (!new BCryptPasswordEncoder().matches(req.getSenha(), user.getSenhaHash()))
            return ResponseEntity.status(401).body("Senha inválida");

        String token = jwtService.gerarToken(user.getEmail());

        return ResponseEntity.ok(new AuthResponse(token));
    }
}
