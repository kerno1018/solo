package com.example.login;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.io.IOUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.*;
import java.util.List;

/***
 * author:chzeze
 * 识别验证码并返回
 * train_path 验证码字母图库位置
 * 验证码图片缓存位置：Configuration.getProperties("web_save_path")+"/captcha.jpg"
 */
public class AmGetCaptchaTest {
    private static Logger logger = LoggerFactory.getLogger(AmGetCaptchaTest.class);
    private static String train_path = "E:\\workspace\\pic";
    private static Map<BufferedImage, String> trainMap = null;
    private static int index = 0;
    private static int imgnum = 0;
    private static MultiThreadedHttpConnectionManager httpConnectionManager = new MultiThreadedHttpConnectionManager();
    private static HttpClient client = new HttpClient(httpConnectionManager);
    /*    static {
            //每主机最大连接数和总共最大连接数，通过hosfConfiguration设置host来区分每个主机
            client.getHttpConnectionManager().getParams().setDefaultMaxConnectionsPerHost(8);
            client.getHttpConnectionManager().getParams().setMaxTotalConnections(48);
            client.getHttpConnectionManager().getParams().setConnectionTimeout(10000);
            client.getHttpConnectionManager().getParams().setSoTimeout(10000);
            client.getHttpConnectionManager().getParams().setTcpNoDelay(true);
            client.getHttpConnectionManager().getParams().setLinger(1000);
            //失败的情况下会进行3次尝试,成功之后不会再尝试
            client.getHttpConnectionManager().getParams().setParameter(HttpMethodParams.RETRY_HANDLER, new DefaultHttpMethodRetryHandler());
        }*/
    public static int isBlack(int colorInt) {
        Color color = new Color(colorInt);
        if (color.getRed() + color.getGreen() + color.getBlue() <= 100) {
            return 1;
        }
        return 0;
    }

    public static int isWhite(int colorInt) {
        Color color = new Color(colorInt);
        if (color.getRed() + color.getGreen() + color.getBlue() > 600) {
            return 1;
        }
        return 0;
    }

    public static BufferedImage removeBackgroud(BufferedImage img)
            throws Exception {
//        BufferedImage img = ImageIO.read(new File(picFile));
        img = img.getSubimage(1, 1, img.getWidth() - 2, img.getHeight() - 2);
        int width = img.getWidth();
        int height = img.getHeight();
        double subWidth = width / 5.0;
        for (int i = 0; i < 5; i++) {
            Map<Integer, Integer> map = new HashMap<Integer, Integer>();
            for (int x = (int) (1 + i * subWidth); x < (i + 1) * subWidth
                    && x < width - 1; ++x) {
                for (int y = 0; y < height; ++y) {
                    if (isWhite(img.getRGB(x, y)) == 1)
                        continue;
                    if (map.containsKey(img.getRGB(x, y))) {
                        map.put(img.getRGB(x, y), map.get(img.getRGB(x, y)) + 1);
                    } else {
                        map.put(img.getRGB(x, y), 1);
                    }
                }
            }
            int max = 0;
            int colorMax = 0;
            for (Integer color : map.keySet()) {
                if (max < map.get(color)) {
                    max = map.get(color);
                    colorMax = color;
                }
            }
            for (int x = (int) (1 + i * subWidth); x < (i + 1) * subWidth
                    && x < width - 1; ++x) {
                for (int y = 0; y < height; ++y) {
                    if (img.getRGB(x, y) != colorMax) {
                        img.setRGB(x, y, Color.WHITE.getRGB());
                    } else {
                        img.setRGB(x, y, Color.BLACK.getRGB());
                    }
                }
            }
        }
        return img;
    }

    public static BufferedImage removeBlank(BufferedImage img) throws Exception {
        int width = img.getWidth();
        int height = img.getHeight();
        int start = 0;
        int end = 0;
        Label1: for (int y = 0; y < height; ++y) {
            for (int x = 0; x < width; ++x) {
                if (isBlack(img.getRGB(x, y)) == 1) {
                    start = y;
                    break Label1;
                }
            }
        }
        Label2: for (int y = height - 1; y >= 0; --y) {
            for (int x = 0; x < width; ++x) {
                if (isBlack(img.getRGB(x, y)) == 1) {
                    end = y;
                    break Label2;
                }
            }
        }
        return img.getSubimage(0, start, width, end - start + 1);
    }

    public static List<BufferedImage> splitImage(BufferedImage img)
            throws Exception {
        List<BufferedImage> subImgs = new ArrayList<BufferedImage>();
        int width = img.getWidth();
        int height = img.getHeight();
        List<Integer> weightlist = new ArrayList<Integer>();
        for (int x = 0; x < width; ++x) {
            int count = 0;
            for (int y = 0; y < height; ++y) {
                if (isBlack(img.getRGB(x, y)) == 1) {
                    count++;
                }
            }
            weightlist.add(count);
        }
        for (int i = 0; i < weightlist.size();i++) {
            int length = 0;
            while (i < weightlist.size() && weightlist.get(i) > 0) {
                i++;
                length++;
            }
            if (length > 2) {
                subImgs.add(removeBlank(img.getSubimage(i - length, 0,
                        length, height)));
            }
        }
        return subImgs;
    }

    public static Map<BufferedImage, String> loadTrainData() throws Exception {
        if (trainMap == null) {
            Map<BufferedImage, String> map = new HashMap<BufferedImage, String>();
            File dir = new File(train_path);
            File[] files = dir.listFiles();
            for (File file : files) {
                map.put(ImageIO.read(file), file.getName().charAt(0) + "");
            }
            trainMap = map;
        }
        return trainMap;
    }

    public static String getSingleCharOcr(BufferedImage img,
                                          Map<BufferedImage, String> map) {
        String result = "#";
        int width = img.getWidth();
        int height = img.getHeight();
        int min = width * height;
        for (BufferedImage bi : map.keySet()) {
            int count = 0;
            if (Math.abs(bi.getWidth()-width) > 2)
                continue;
            int widthmin = width < bi.getWidth() ? width : bi.getWidth();
            int heightmin = height < bi.getHeight() ? height : bi.getHeight();
            Label1: for (int x = 0; x < widthmin; ++x) {
                for (int y = 0; y < heightmin; ++y) {
                    if (isBlack(img.getRGB(x, y)) != isBlack(bi.getRGB(x, y))) {
                        count++;
                        if (count >= min)
                            break Label1;
                    }
                }
            }
            if (count < min) {
                min = count;
                result = map.get(bi);
            }
        }
        return result;
    }

    public static String getAllOcr(BufferedImage file) throws Exception {
        BufferedImage img = removeBackgroud(file);//去除重影
        List<BufferedImage> listImg = splitImage(file);//切割图片
        Map<BufferedImage, String> map = loadTrainData();
        String result = "";
        for (BufferedImage bi : listImg) {
            result += getSingleCharOcr(bi, map);
        }
        //ImageIO.write(img, "JPG", new File("result6\\" + result + ".jpg"));
        return result;
    }
    /***
     * 下载验证码图片暂时保存供识别程序使用
     * @param imgurl 验证码图片url
     */
    public static void downloadimg(String imgurl)
    {
        //HttpClient httpClient = new HttpClient();

        //httpClient.getHttpConnectionManager().getParams().setConnectionTimeout(10000);
        //httpClient.getHttpConnectionManager().getParams().setSoTimeout(10000);
        GetMethod getMethod = new GetMethod(imgurl);
        try {
            int statusCode = client.executeMethod(getMethod);
            System.out.println(statusCode);
            if (statusCode != HttpStatus.SC_OK) {
                System.err.println("("+statusCode+")Method failed: "+ getMethod.getStatusLine());
                logger.info("("+statusCode+")Method failed: "+ getMethod.getStatusLine());
            }
            InputStream inputStream = getMethod.getResponseBodyAsStream();
            OutputStream outStream = new FileOutputStream("/data/sata/share_sata/AmazonCrawl/amazonWeb/captcha.jpg");
            IOUtils.copy(inputStream, outStream);
            inputStream.close();
            outStream.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            //logger.info(new Date()+"captcha appear exception:"+e.getMessage());
            try {
                //若遇到异常则睡眠20秒后继续重试
                Thread.sleep(20000);
            } catch (InterruptedException e1) {
                e1.printStackTrace();
            }
            e.printStackTrace();
        }finally {
            getMethod.releaseConnection();
        }
    }
    /***
     * 抽取页面验证码并返回
     * @return 验证码字符串
     */
    public static String GetCaptcha(BufferedImage image){
        String captcha_str="######";//未识别则为#
//        Document doc = Jsoup.parse(html.toString());
//        String imgurl = doc.select("div[class=a-row a-text-center]").get(0).child(0).attr("src");
        //System.out.println(imgurl);
//        downloadimg(imgurl);
        try {
            captcha_str = getAllOcr(image);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return captcha_str;
    }
}