package com.premier.security;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET = "01234567890123456789012345678901";

    public String gerarToken(String email) {
        try {

            JWTClaimsSet claims = new JWTClaimsSet.Builder()
                    .subject(email)
                    .expirationTime(Date.from(Instant.now().plusSeconds(60 * 60 * 24)))
                    .build();

            JWSSigner signer = new MACSigner(SECRET);

            SignedJWT jwt = new SignedJWT(
                    new JWSHeader(JWSAlgorithm.HS256),
                    claims
            );

            jwt.sign(signer);

            return jwt.serialize();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public boolean validarToken(String token) {
        try {
            SignedJWT signedJWT = SignedJWT.parse(token);
            JWSVerifier verifier = new MACVerifier(SECRET);

            boolean assinaturaValida = signedJWT.verify(verifier);
            boolean expirado = signedJWT.getJWTClaimsSet().getExpirationTime().before(new Date());

            return assinaturaValida && !expirado;

        } catch (Exception e) {
            return false;
        }
    }

    public String obterSubject(String token) {
        try {
            SignedJWT signedJWT = SignedJWT.parse(token);
            return signedJWT.getJWTClaimsSet().getSubject();
        } catch (ParseException e) {
            return null;
        }
    }

}
