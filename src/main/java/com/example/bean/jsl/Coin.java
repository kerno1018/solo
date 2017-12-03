package com.example.bean.jsl;

import java.io.Serializable;
import java.util.Map;

public class Coin implements Serializable{

    private Object id;
    private Map<String,Object> cell;

    public Object getId() {
        return id;
    }

    public void setId(Object id) {
        this.id = id;
    }

    public Map<String, Object> getCell() {
        return cell;
    }

    public void setCell(Map<String, Object> cell) {
        this.cell = cell;
    }
}
