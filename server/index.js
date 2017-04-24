// import {search} from '../utils/search'
import express from 'express'
import {search} from '../utils/search'
import {douyuAna} from '../utils/dom-ana'

let app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/:id', function (req, res, next) {
  search('dnf', 'douyu',true).then((ret) => {
    res.send(ret)
  })
});


app.listen(3000, (req) => {
  console.log(`server is starton `)
});