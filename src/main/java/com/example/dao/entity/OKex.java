package com.example.dao.entity;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.Serializable;
import java.util.Map;

public class OKex implements Serializable{
    private String contract_id;
    private Double last;
    private Double index;
    public OKex(){}
    public OKex(Map<String,Map<String,Object>> map,Double index){
        ObjectMapper mapper = new ObjectMapper();

        setContract_id(map.get("ticker").get("contract_id").toString());
        setLast(Double.valueOf(map.get("ticker").get("last").toString()));
        setIndex(index);
    }

    public String getContract_id() {
        return contract_id.substring(4,8);
    }

    public void setContract_id(String contract_id) {
        this.contract_id = contract_id;
    }

    public Double getLast() {
        return last;
    }

    public void setLast(Double last) {
        this.last = last;
    }

    public Double getIndex() {
        return index;
    }

    public void setIndex(Double index) {
        this.index = index;
    }
}
