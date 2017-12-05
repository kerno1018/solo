package com.example.rest;


import com.example.base.Keys;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Key;

@RestController
public class TestRestService {

    @GetMapping("/showlog")
    public void showlog(){
        Keys.SHOW_LOG = !Keys.SHOW_LOG;
    }

}
