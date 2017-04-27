/**
 *  Reference resources from live-streaming-crawler
 */
import cheerio from 'cheerio';
import {transformAudienceNumber} from '../utils/utils'
/**
 *
 * 搜索斗鱼的方法
 * 直接返回html页面
 * 如果页面中对应元素带有正在直播的标签则为正在直播
 * 搜索失败会直接resolve空数组
 *
 * @async
 * @param {string} keyword - 搜索的关键字
 * @return {Promise.<Array.<Object>>}
 */
export const douyuAna = text => {
    let liveJson = [];
    let $ = cheerio.load(text);
    $('#live-list-contentbox li a').each((idx, ele) => {
        ele = $(ele);
        let audienceText = $(ele.find('.dy-num')[0]).text();
        liveJson.push({
            title: ele.attr('title'),
            anchor: $(ele.find('.dy-name')[0]).text(),
            audienceNumber: transformAudienceNumber(audienceText),
            snapshot: $(ele.find('.imgbox img')[0]).attr('data-original'),
            url: 'https://www.douyu.com' + ele.attr('href'),
            platformIcon: '/images/icon1.png',
        });
    });
    return liveJson
}

/**
 * 搜索龙珠的方法
 * live字段为其直播信息
 * live.isLive 表示是否正在直播
 * 有点缺陷就是没有直播截图
 */
export const longzhuAna = text => {
    let liveJson = [];
    let $ = cheerio.load(text);
    $('#list #list-con a.livecard').each((idx, ele) => {
        ele = $(ele);
        let audienceText = ele.find('.livecard-meta-item-text').text()
        liveJson.push({
            title: ele.find(".listcard-caption").attr("title"),
            anchor: $(ele.find('.livecard-modal-username')[0]).text(),
            audienceNumber: transformAudienceNumber(audienceText),
            snapshot: ele.find('img.livecard-thumb').attr('src'),
            url: ele.attr('href'),
            platformIcon: '/images/icon2.png',
        });
    });
    return liveJson
}

/**
 * 搜索熊猫tv的方法
 * 返回的reliable为1表示正在直播
 * 2表示没在直播
 * 搜索失败会直接resolve空数组
 *
 * @async
 * @param {string} keyword - 搜索的关键字
 * @return {Promise.<Array.<Object>>}
 */
export const pandaAna = text => {
    return JSON.parse(text).data.items.map((item) => ({
        title: item.name,
        audienceNumber: item.person_num,
        snapshot: item.pictures.img,
        url: `http://www.panda.tv/${item.roomid}`,
        platformIcon: '/images/icon0.png',
        anchor: item.nickname,
        category: item.classification,
        onlineFlag: item.reliable == 1,
    }))
}

export const ana = (plat, ret) => {
    const j = {
        douyu: douyuAna,
        panda: pandaAna,
        longzhu: longzhuAna
    }
    return j[plat](ret)
}

