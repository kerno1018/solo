package com.example.service;

import com.example.dao.UserDao;
import com.example.entity.User;
import org.hibernate.criterion.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao dao;
    public List<User> getUserList(){
        return dao.getAll();
    }

    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void lockUser(Integer id) {
        dao.lockAccount(id);
    }
}
