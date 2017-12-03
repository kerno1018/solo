package com.example.entity;


import com.example.base.CacluateUtil;
import org.jsoup.helper.StringUtil;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by kerno on 1/23/2016.
 */
@Entity
@Table(name="LOGINFO")
public class LogInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ID")
    private Integer id;

    @Column(name="USER_ID")
    private Integer userId;

    @Column(name="SELL")
    private String sell;

    @Column(name="BUY")
    private String buy;

    @Column(name="SELL_PRICE")
    private Double sellPrice;

    @Column(name="BUY_PRICE")
    private Double buyPrice;

    @Column(name="YJ")
    private Double yj;

    @Column(name="DEAL_BUYPREMINUM")
    private Double dealBuyPreminum;
    @Column(name="DEAL_SELLPREMINUM")
    private Double dealSellPreminum;

    @Column(name="SELLONE")
    private Double sellOne;
    @Column(name="SELLTWO")
    private Double sellTwo;
    @Column(name="SELLTHREE")
    private Double sellThree;
    @Column(name="SELLFOUR")
    private Double sellFour;
    @Column(name="SELLFIVE")
    private Double sellFive;

    @Column(name="BUYONE")
    private Double buyOne;
    @Column(name="BUYTWO")
    private Double buyTwo;
    @Column(name="BUYTHREE")
    private Double buyThree;
    @Column(name="BUYFOUR")
    private Double buyFour;
    @Column(name="BUYFIVE")
    private Double buyFive;

    @Column(name="SELLPRICE_ONE")
    private Double sellPriceOne;
    @Column(name="SELLPRICE_TWO")
    private Double sellPriceTwo;
    @Column(name="SELLPRICE_THREE")
    private Double sellPriceThree;
    @Column(name="SELLPRICE_FOUR")
    private Double sellPriceFour;
    @Column(name="SELLPRICE_FIVE")
    private Double sellPriceFive;

    @Column(name="BUYPRICE_ONE")
    private Double buyPriceOne;
    @Column(name="BUYPRICE_TWO")
    private Double buyPriceTwo;
    @Column(name="BUYPRICE_THREE")
    private Double buyPriceThree;
    @Column(name="BUYPRICE_FOUR")
    private Double buyPriceFour;
    @Column(name="BUYPRICE_FIVE")
    private Double buyPriceFive;

    @Column(name="CREATE_DATE")
    private Date createDate;
    @Column(name="SELL_TIME")
    private Date sellTime;
    @Column(name="BUY_TIME")
    private Date buyTime;
    @Column(name="ORDER_NO")
    private String orderNo;
    @Column(name="REAL_SELL_COST")
    private Double realSellCost;
    @Column(name="REAL_BUY_COST")
    private Double realBuyCost;
    @Column(name="REAL_BUY")
    private Double realBuy;
    @Column(name="REAL_SELL")
    private Double realSell;

    public Double getRealSellCost() {
        return realSellCost;
    }

    public void setRealSellCost(Double realSellCost) {
        this.realSellCost = realSellCost;
    }

    public Double getRealBuyCost() {
        return realBuyCost;
    }

    public void setRealBuyCost(Double realBuyCost) {
        this.realBuyCost = realBuyCost;
    }

    public Double getRealBuy() {
        return realBuy;
    }

    public void setRealBuy(Double realBuy) {
        this.realBuy = realBuy;
    }

    public Double getRealSell() {
        return realSell;
    }

    public void setRealSell(Double realSell) {
        this.realSell = realSell;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getSell() {
        return sell;
    }

    public void setSell(String sell) {
        this.sell = sell;
    }

    public String getBuy() {
        return buy;
    }

    public void setBuy(String buy) {
        this.buy = buy;
    }

    public Double getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(Double sellPrice) {
        this.sellPrice = sellPrice;
    }

    public Double getBuyPrice() {
        return buyPrice;
    }

    public void setBuyPrice(Double buyPrice) {
        this.buyPrice = buyPrice;
    }

    public Double getYj() {
        return yj;
    }

    public void setYj(Double yj) {
        this.yj = yj;
    }

    public Double getDealBuyPreminum() {
        return dealBuyPreminum;
    }

    public void setDealBuyPreminum(Double dealBuyPreminum) {
        this.dealBuyPreminum = dealBuyPreminum;
    }

    public Double getDealSellPreminum() {
        return dealSellPreminum;
    }

    public void setDealSellPreminum(Double dealSellPreminum) {
        this.dealSellPreminum = dealSellPreminum;
    }

    public Double getSellOne() {
        return sellOne;
    }

    public void setSellOne(Double sellOne) {
        this.sellOne = sellOne;
    }

    public Double getSellTwo() {
        return sellTwo;
    }

    public void setSellTwo(Double sellTwo) {
        this.sellTwo = sellTwo;
    }

    public Double getSellThree() {
        return sellThree;
    }

    public void setSellThree(Double sellThree) {
        this.sellThree = sellThree;
    }

    public Double getSellFour() {
        return sellFour;
    }

    public void setSellFour(Double sellFour) {
        this.sellFour = sellFour;
    }

    public Double getSellFive() {
        return sellFive;
    }

    public void setSellFive(Double sellFive) {
        this.sellFive = sellFive;
    }

    public Double getBuyOne() {
        return buyOne;
    }

    public void setBuyOne(Double buyOne) {
        this.buyOne = buyOne;
    }

    public Double getBuyTwo() {
        return buyTwo;
    }

    public void setBuyTwo(Double buyTwo) {
        this.buyTwo = buyTwo;
    }

    public Double getBuyThree() {
        return buyThree;
    }

    public void setBuyThree(Double buyThree) {
        this.buyThree = buyThree;
    }

    public Double getBuyFour() {
        return buyFour;
    }

    public void setBuyFour(Double buyFour) {
        this.buyFour = buyFour;
    }

    public Double getBuyFive() {
        return buyFive;
    }

    public void setBuyFive(Double buyFive) {
        this.buyFive = buyFive;
    }

    public Double getSellPriceOne() {
        return sellPriceOne;
    }

    public void setSellPriceOne(Double sellPriceOne) {
        this.sellPriceOne = sellPriceOne;
    }

    public Double getSellPriceTwo() {
        return sellPriceTwo;
    }

    public void setSellPriceTwo(Double sellPriceTwo) {
        this.sellPriceTwo = sellPriceTwo;
    }

    public Double getSellPriceThree() {
        return sellPriceThree;
    }

    public void setSellPriceThree(Double sellPriceThree) {
        this.sellPriceThree = sellPriceThree;
    }

    public Double getSellPriceFour() {
        return sellPriceFour;
    }

    public void setSellPriceFour(Double sellPriceFour) {
        this.sellPriceFour = sellPriceFour;
    }

    public Double getSellPriceFive() {
        return sellPriceFive;
    }

    public void setSellPriceFive(Double sellPriceFive) {
        this.sellPriceFive = sellPriceFive;
    }

    public Double getBuyPriceOne() {
        return buyPriceOne;
    }

    public void setBuyPriceOne(Double buyPriceOne) {
        this.buyPriceOne = buyPriceOne;
    }

    public Double getBuyPriceTwo() {
        return buyPriceTwo;
    }

    public void setBuyPriceTwo(Double buyPriceTwo) {
        this.buyPriceTwo = buyPriceTwo;
    }

    public Double getBuyPriceThree() {
        return buyPriceThree;
    }

    public void setBuyPriceThree(Double buyPriceThree) {
        this.buyPriceThree = buyPriceThree;
    }

    public Double getBuyPriceFour() {
        return buyPriceFour;
    }

    public void setBuyPriceFour(Double buyPriceFour) {
        this.buyPriceFour = buyPriceFour;
    }

    public Double getBuyPriceFive() {
        return buyPriceFive;
    }

    public void setBuyPriceFive(Double buyPriceFive) {
        this.buyPriceFive = buyPriceFive;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getSellTime() {
        return sellTime;
    }

    public void setSellTime(Date sellTime) {
        this.sellTime = sellTime;
    }

    public Date getBuyTime() {
        return buyTime;
    }

    public void setBuyTime(Date buyTime) {
        this.buyTime = buyTime;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }
}
