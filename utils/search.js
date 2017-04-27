import {getAsync} from './client'
import {categorySearch} from '../utils/utils'

export const keywordSearch = (keyword, plateform) => {
    const keywordUrls = {
        panda: encodeURI(`http://www.panda.tv/ajax_search?order_cond=fans&pageno=1&name=${keyword}&pagenum=20`),
        huya: encodeURI(`http://search.huya.com/?m=Search&do=getSearchContent&q=${keyword}&uid=0&app=11&v=4&typ=-5&rows=40`),
        douyu: encodeURI(`https://www.douyu.com/search?kw=${keyword}&label=live&type=popularity`),
        quanming: encodeURI('http://www.quanmin.tv/site/search?p=5&rid=-1&rcat=-1&uid=-1&net=0&screen=3&device=rwduvf64prarqwhnzjtjj1s1cl80lcajhvuung25&refer=search&sw=1280&sh=800'),
        longzhu: encodeURI('http://searchapi.plu.cn/api/search/room'),
        zhanqi: encodeURI(`https://www.zhanqi.tv/search?q=${keyword}`)
    }
    return keywordUrls[plateform]
}

export const search = (a, plat) => {
    const funs = {
        panda: keywordSearch,
        longzhu: categorySearch,
        douyu: categorySearch
    }
    return getAsync(funs[plat].call(this, a, plat))
}
