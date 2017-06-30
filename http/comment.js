/**
 * Created by tongwii on 2017/6/30.
 */
var http =require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content':'一起期待下一期课程',
    'cid':348
})

var options ={
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=6bfe3fae-7564-4075-9569-a708c4756a53;' +
        ' imooc_isnew_ct=1498470127; channel=491b6f5ab9637e8f6dffbbdd8806db9b_phpkecheng; ' +
        'mc_channel=banner; mc_marking=11840104d12a6e25d60379c03857a2c9;' +
        ' PHPSESSID=41u16okac1prou10h9l0dn7n32;' +
        ' tpregister_pass=tDLYSNXgZ2apObliW5mHPMKVbh2-IlKC87daTbEJESoskj57-58BuoeNM7ST6UXtwTVd3O1Y0JLdpsm5jN8aXWQ5mDq-2k8QXlR4t4J9cacujciWIHDWj6jOVwNhOilFG8txxl6Z3G12D1m07EBUGaUWXwTY-M_KZlUz4c_A5L2WdyV2jraY5od5s6tvSEu6OcsaBi0cQyxemWj6WNOlMEXTSJUV8ZPsJgwybU2K73iNHhVy_L0rhop7lX-FfUFP35NwZy7N-ckqs-u_tfXeg4oqKioPoF3WcHYDlRe05fIH8xaCkYAY9hhRRXQlBiADwTHPI7AcMUBm4hfozFxs0KrXnAdsX1QuXgrIwt_zTG2ARcXK7KM_szDyMxm57pFRxpssTD8jD5tjmCCm_w6uOg%2C%2C-SGI3i; ' +
        'loginstate=1; apsid=U3ZjI5OGEwMTY0ZjdkNzlkMDU4NWIxNDc3YTkxOGMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTExNjY1OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5MTA5NDgzMTBAcXEuY29tAAAAAAAAAAAAAAAAAAAAADBiYTA3NDllMTU1NjdlNzU4ZWE2ODI2MzFkZDczZmE3vbpVWb26VVk%3DOT; last_login_username=910948310%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1498732117,1498732537,1498732730,1498790433; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1498790828; imooc_isnew=2; cvde=5955ba23a4280-25; Hm_lvt_407473d433e871de861cf818aa1405a1=1498732123,1498732543,1498732736,1498790439; ' +
        'Hm_lpvt_407473d433e871de861cf818aa1405a1=1498790835',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options,function (res) {
    console.log('Status '+res.statusCode);
    console.log('Status ' + JSON.stringify(res.headers));

    res.on('data',function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end',function () {
        console.log('评论完毕');
    });

});

req.on('error',function (e) {
    console.log('评论失败'+e.message);
});

req.write(postData);

req.end();