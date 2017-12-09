package com.example.demo;

import com.example.base.Keys;
import com.example.service.JSLService;
import com.example.service.LogService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class) // SpringJUnit支持，由此引入Spring-Test框架支持！
@SpringBootTest // 由于是Web项目，Junit需要模拟ServletContext，因此我们需要给我们的测试类加上@WebAppConfiguration。
public class StockInfoTest {
    @Autowired
    private LogService service;
    @Autowired
    private JSLService dataService;

    @Test
    public void testSave(){
        Keys.needProxy = false;
        dataService.syncData();
        dataService.refreshData();
//        service.updateStockInfoToDB();

    }




}
