package com.example.dao;

import com.example.entity.LogInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

@Component
public interface LogDao extends JpaRepository<LogInfo,Long> {



}
