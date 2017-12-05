package com.example.base;

import java.util.Date;

/**
 * Created by kerno on 1/8/2016.
 */
public class Keys {
     public static Boolean FORCE_STOP = false;
     public static Boolean needProxy = true;
     public static Boolean DEBUG= false;
     public static Boolean SHOW_LOG=false;
     public static Double POSITION = 0.95;
     public static Double FORBID_ROLLING_LIMIT = 10000.0;
     public static  String URL_STOCKK = "http://hq.sinajs.cn/list=";
     public static String GTJA_ADDORDER_ADDR = "https://trade.gtja.com/webtrade/trade/webTradeAction.do?method=entrustBusinessOut";
     public static String GTJA_DEALINFO_TADAY = "https://trade.gtja.com/webtrade/trade/webTradeAction.do?method=searchDealDetailToday";
     public static  String GTJA_DEAL_ENTREST="https://trade.gtja.com/webtrade/trade/webTradeAction.do?method=searchEntrustDetailToday";
     public static  String GTJA_OWNINFO = "https://trade.gtja.com/webtrade/trade/webTradeAction.do?method=searchStackDetail";
     public static String JSL_MONEYINFO = "https://www.jisilu.cn/data/repo/trade_money_fund_list/?___t=";
     public static String DEAL_TYPE = "普通成交";
     public static Double CONDITION_PREMINUM = -0.00005;
     public static  String ORDERNO = "123";
     public static String ERROR_ORDER_NO = "NON-ORDER";
     public static String TIME_OUT = "Account Session Timeout";
     public static String SUCCESS_INFO="{\"success\":true}";

     public static String UNIT_TOTAL = "10";
     public static String USERNAME="";
     public static String PASSWORD="";
     public static String EMAIL="418697994@qq.com";
}
