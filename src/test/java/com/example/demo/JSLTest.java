package com.example.demo;

import com.example.base.Keys;
import com.example.service.JSLService;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.testng.annotations.Test;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Base64;

public class JSLTest {

    @Test
    public void infoTest() throws InterruptedException {
        System.setProperty("org.apache.commons.logging.simplelog.log.org.apache.commons.httpclient", "error");
        JSLService service = new JSLService();
        service.syncData();
    }

    @Test
    public static void main(String[] args) throws IOException, InterruptedException {
        HttpClient httpClient = new HttpClient(new MultiThreadedHttpConnectionManager());
        for(int i=0;i<10;i++){
            GetMethod get = new GetMethod("https://trade.gtja.com/webtrade/commons/verifyCodeImage.jsp?ran="+Math.random());
            httpClient.executeMethod(get);
            BufferedImage img = ImageIO.read(get.getResponseBodyAsStream());
            ImageIO.write(img, "png", new File("E:\\workspace\\pic\\"+Math.random()+".png"));
            Thread.sleep(2000);
        }
    }
    @Test
    public void pwd(){
        System.out.println(new String(Base64.getEncoder().encode(Keys.PASSWORD.getBytes())));
    }
}
