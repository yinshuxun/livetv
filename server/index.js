// import {search} from '../utils/search'
import express from 'express'
import {search} from '../utils/search'


let app = express()
app.get('/', function (req, res) {
    search('dnf', 'longzhu').then(res => {
        res.send('123123')
    })
});
app.listen(3000);