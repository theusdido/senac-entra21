package com.consultoriomedico.consultoriomedico.controller;

import java.util.List;

import com.consultoriomedico.consultoriomedico.model.AtendenteEntity;
import com.consultoriomedico.consultoriomedico.repository.AtendenteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="/atendente")
public class AtendenteController {
    
    @Autowired
    private AtendenteRepository repositorio;    
    
    @PostMapping
    public int add(@RequestBody AtendenteEntity atendenteREST){
        int id = 0;
        if (atendenteREST.getId() == 0){
            AtendenteEntity atendente = new AtendenteEntity();
            atendente.setNome(atendenteREST.getNome());    
            this.repositorio.save(atendente);
            id = atendente.getId();
        }else{
            this.repositorio.save(atendenteREST);
            id = atendenteREST.getId();
        }        
        return id;
    }

    @GetMapping
    public List<AtendenteEntity> listar(){
        return this.repositorio.findAll();
    }
}