package com.premier.service;

import com.premier.model.Produto;
import com.premier.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> listarTodos() { return produtoRepository.findAll(); }

    public Produto salvar(Produto p) { return produtoRepository.save(p); }

    public Optional<Produto> buscarPorId(Long id) { return produtoRepository.findById(id); }

    public List<Produto> buscarPorNome(String q) { return produtoRepository.findByNomeContainingIgnoreCase(q); }
}
