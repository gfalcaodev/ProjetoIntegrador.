package com.premier.controller;

import com.premier.model.Produto;
import com.premier.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping
    public List<Produto> listar() {
        return produtoService.listarTodos();
    }

    @PostMapping
    public Produto criar(@RequestBody Produto produto) {
        return produtoService.salvar(produto);
    }

    @GetMapping("/search")
    public List<Produto> search(@RequestParam String q) {
        return produtoService.buscarPorNome(q);
    }

    @GetMapping("/recomendados/{usuarioId}")
    public ResponseEntity<?> recomendados(@PathVariable Long usuarioId) {

        String iaUrl = "http://localhost:5001/recommend";

        try {
        Map<String, Object> payload = new HashMap<>();
        payload.put("user_id", usuarioId);
        payload.put("features", List.of());
        
        Map<String, Object> resp = restTemplate.postForObject(iaUrl, payload, Map.class);
        
        if (resp != null && resp.get("recommendations") instanceof List<?> rawList) {
        
            List<Long> ids = rawList.stream()
                    .map(o -> Long.valueOf(String.valueOf(o)))
                    .collect(Collectors.toList());
        
            List<Produto> produtos = produtoService.listarTodos().stream()
                    .filter(p -> ids.contains(p.getId()))
                    .collect(Collectors.toList());
        
            return ResponseEntity.ok(produtos);
        }

    } catch (Exception ex) {
        // fallback
        List<Produto> all = produtoService.listarTodos();
        Collections.shuffle(all);
        return ResponseEntity.ok(all.stream().limit(4).toList());
    }

    return ResponseEntity.ok(List.of());
}

}
