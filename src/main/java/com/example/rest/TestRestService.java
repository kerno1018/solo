package com.example.rest;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestRestService {

    @GetMapping("/test")
    public String test(){
        return "String";
    }
}
