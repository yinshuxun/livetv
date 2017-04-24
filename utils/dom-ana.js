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
 * 因为不知道为什么用superagent获取不了，所以用了request
 *
 * @async
 * @param {string} keyword - 搜索的关键字
 * @return {Promise.<Array.<Object>>}
 */
export const longzhuAna = text => {
  return JSON.parse(text).items.map((item) => ({
    title: item.live.title,
    audienceNumber: item.live.onlineCount,
    // snapshot: item.game_screenshot,
    url: `http://star.longzhu.com/${item.live.url}`,
    platformIcon: '/images/icon6.png',
    anchor: item.name,
    category: item.gameName,
    onlineFlag: item.live.isLive,
  }))
}