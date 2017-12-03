package com.example.service;

import com.example.dao.LogDao;
import com.example.entity.LogInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class LogService {

    @Autowired
    private LogDao dao;
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void save(LogInfo bean){
        dao.save(bean);
    }


}
