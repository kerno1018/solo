package com.example.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

public class HttpUtil {
    static HttpClient  client = new HttpClient(new MultiThreadedHttpConnectionManager());

    public static String getResponse(String url){
        GetMethod method = new GetMethod(url);
        StringBuffer temp = new StringBuffer();
        try{
        int code = client.executeMethod(method);
            if(code == 200) {
                InputStream is = method.getResponseBodyAsStream();
                InputStreamReader ir = new InputStreamReader(is,"gbk");
                BufferedReader br = new BufferedReader(ir);
                String tempLine = br.readLine();
                while (tempLine != null) {
                    temp.append(tempLine);
                    tempLine = br.readLine();
                }
                br.close();
                ir.close();
                is.close();
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }finally {
            method.releaseConnection();
        }
        return temp.toString();
    }
    public static <T> T revert(String value,Class clazz){
        try {
            ObjectMapper mapp = new ObjectMapper();
            return (T)mapp.readValue(value,clazz);
        } catch (IOException e) {
            System.out.println("exception : " + value);
        }
        return null;
    }

}
