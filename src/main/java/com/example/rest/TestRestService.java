package com.example.rest;


import com.example.base.DB;
import com.example.base.Keys;
import com.example.bean.Stock;
import com.example.service.JSLService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Key;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TestRestService {
    @Autowired
    private JSLService service;
    @GetMapping("/showlog")
    public void showlog(){
        Keys.SHOW_LOG = !Keys.SHOW_LOG;
    }

    @GetMapping("/perminum")
    public String showAllCurrencyInfo(){
        DB.getAllStocks();
        ObjectMapper mapp = new ObjectMapper();
        Map<String,Object> result = new HashMap<>();
        result.put("data",DB.getAllStocks().values());
        result.put("draw",1);
        result.put("recordsTotal",DB.getAllStocks().size());
        result.put("recordsFiltered",DB.getAllStocks().size());

        try {
            return mapp.writeValueAsString(result);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }

}
