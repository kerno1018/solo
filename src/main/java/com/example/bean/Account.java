package com.example.bean;

import com.example.entity.LogInfo;
import com.example.entity.User;
import org.apache.commons.httpclient.HttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import com.example.base.*;

import javax.persistence.*;

/**
 * Created by kerno on 16-1-6.
 */
@Entity
@Table(name="ACCOUNT")
public class Account implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ID")
    private Integer id;
    @Column(name="COOKIE",length = 2000)
    private String cookie;
    @OneToOne(cascade = CascadeType.ALL,optional = true,fetch = FetchType.EAGER)
    @JoinColumn(name="ID")
    private User user;
    @Transient
    private volatile Double canUseMoney;
    @Transient
    private String email;
    @Transient
    private volatile Boolean status;
    @Transient
    private Map<String,OwnStock> ownStock;
    @Transient
    private LogInfo log;
    @Transient
    private List<OrderInfo> dealOrderSuccess = new ArrayList<>();
    @Transient
    private String dealUrl;
    @Transient
    private volatile Double freeMoney=0.0;
    @Transient
    private volatile Integer version=0;
    @Transient
    private Logger logger = LoggerFactory.getLogger(Account.class);
    @Transient
    private volatile HttpClient client;
    @Transient
    private volatile Integer lockAccountVersion=0;
    @Transient
    private volatile Integer syncMoneyVersion=0;

    public HttpClient getClient() {
        return client;
    }

    public void setClient(HttpClient client) {
        this.client = client;
    }

    public synchronized Double getFreeMoney() {
        Double result = freeMoney;
        freeMoney=0.0;
        return result;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public synchronized void addFreeMoney(Double freeMoney) {
        this.freeMoney += freeMoney;
    }

    private Boolean dealStragetyRoll = false;

    public Boolean getDealStragetyRoll() {
        return dealStragetyRoll;
    }

    public void setDealStragetyRoll(Boolean dealStragetyRoll) {
        this.dealStragetyRoll = dealStragetyRoll;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCookie() {
        return cookie;
    }

    public void setCookie(String cookie) {
        this.cookie = cookie;
    }

    public synchronized Double getCanUseMoney() {
        return canUseMoney;
    }

    public synchronized void setCanUseMoney(Double canUseMoney) {
        this.canUseMoney = canUseMoney;
    }

    public Map<String, OwnStock> getOwnStock() {
        return ownStock;
    }

    public void setOwnStock(Map<String, OwnStock> ownStock) {
        this.ownStock = ownStock;
    }

    public LogInfo getLog() {
        return log;
    }

    public void setLog(LogInfo log) {
        this.log = log;
    }


    public void initClient(){
        client  = ClientFactory.getClient(cookie);
        new Thread(new SyncSuccessDeal(this)).start();
    }

    public List<OrderInfo> getDealOrderSuccess() {
        return dealOrderSuccess;
    }

    public void setDealOrderSuccess(List<OrderInfo> dealOrderSuccess) {
        this.dealOrderSuccess = dealOrderSuccess;
    }

    public String getDealUrl() {
        return dealUrl;
    }

    public void setDealUrl(String dealUrl) {
        this.dealUrl = dealUrl;
    }

    public Integer getVersion() {
        return version;
    }

    public String getEmail() {
        return Keys.EMAIL;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public synchronized void addVersion() {
        ++version;
    }
    public synchronized void subtractVersion() {
        --version;
    }

    public void substractCanUseMoney(double money) {
        setCanUseMoney(canUseMoney - money);
    }

    class SyncSuccessDeal implements Runnable{
        Account account;
        public SyncSuccessDeal(Account account){
            this.account = account;
        }
        @Override
        public void run() {
            while (true){
                if(DB.getAccount(account.getId()+"") == null){
                    break;
                }
                if(Keys.FORCE_STOP){
                    break;
                }
                if(version > 0){
                    if(Keys.SHOW_LOG){
                        logger.warn("sync deal order...");
                    }
                    List<OrderInfo> result = Util.getTurnOverInfo(client,account,"",null);
                    if(result == null){
                        break;
                    }else{
                        setDealOrderSuccess(result);
                    }
                }
                if(syncMoneyVersion > 0){
                    syncMoneyVersion--;
                    logger.warn("sync can use money...");
                    Double money = Util.updateAccountCanUseMoney(client,account);
                    if(money != null){
                        setCanUseMoney(money);
                    }
                }
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public synchronized Integer getLockAccountVersion() {
        return lockAccountVersion;
    }

    public synchronized void addLockAccountVersion(){
        ++lockAccountVersion;
    }
    public synchronized void substractLockAccountVersion() {
        --lockAccountVersion;
    }

    public synchronized void syncMoney() {
        this.syncMoneyVersion++;
    }
}
