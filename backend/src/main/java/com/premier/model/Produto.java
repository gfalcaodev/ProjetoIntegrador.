package com.premier.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Table(name = "produtos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    private BigDecimal preco;

    private String marca;

    @Column(name = "modelo_moto")
    private String modeloMoto;

    @Column(name = "imagem_url")
    private String imagemUrl;

    @Column(name = "categoria_id")
    private Integer categoriaId;
}
