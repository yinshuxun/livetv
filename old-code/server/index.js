// import {search} from '../utils/search'
import express from 'express'
import {search} from '../utils/search'
import {ana} from '../utils/dom-ana'

const mData = ()=>{
    return new Array(50).fill({
        title:`测试数据${Math.floor(Math.random(100)*100)}`,
        anchor: `主播${Math.floor(Math.random(100)*100)}`,
        audienceNumber: Math.floor(Math.random(100)*100000),
        snapshot: '',
        url: '',
        platformIcon: '',
    })
}

let app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/liveapi/:id/:plat', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/liveapi/:cate/:plat', function (req, res, next) {
    const s = Date.now()
    setTimeout(()=>{
            res.send(mData())
        console.log(`cost ${Date.now() - s} ms`)
        },500)

    // search(req.params.cate, req.params.plat).then((ret) => {
    //     res.send(ana(req.params.plat, ret))
    // })
});


app.listen(3000, (req) => {
    console.log(`server is starton on 3000`)
});
