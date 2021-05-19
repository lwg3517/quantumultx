hostname = api.m.jd.com,trade-acs.m.taobao.com, amdc.m.taobao.com


#京东历史比价 (by yichahucha)
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/JDHelloWorld/jd_price/main/jd_price.js

#淘宝历史比价 (by yichahucha)
^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js


