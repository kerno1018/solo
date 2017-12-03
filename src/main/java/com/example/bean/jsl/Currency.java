package com.example.bean.jsl;

import java.io.Serializable;
import java.util.List;

public class Currency implements Serializable{
    private Object page;
    private List<Coin> rows;

    public Object getPage() {
        return page;
    }

    public void setPage(Object page) {
        this.page = page;
    }

    public List<Coin> getRows() {
        return rows;
    }

    public void setRows(List<Coin> rows) {
        this.rows = rows;
    }
}
