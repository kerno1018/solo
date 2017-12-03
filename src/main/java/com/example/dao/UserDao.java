package com.example.dao;

import com.example.entity.User;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Component
public interface UserDao extends JpaRepository<User,Long> {

    @Query("from User where enable=true")
    List<User> getAll();

    @Modifying
    @Query("update User set enable=false where id=:id")
    void lockAccount(@Param("id")Integer id);
}
