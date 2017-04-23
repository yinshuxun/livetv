/**
 *  Reference resources from live-streaming-crawler
 */
import cheerio from 'cheerio';


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
const douyuAna = text => {
  let $ = cheerio.load(text);
  let liveJson = [];
  $('#search-room-list a').each((idx, ele) => {
    ele = $(ele);
    liveJson.push({
      title: ele.attr('title'),
      audienceNumber: transformAudienceNumber($(ele.find('.dy-num')[0]).text()),
      snapshot: $(ele.find('.imgbox img')[0]).attr('data-original'),
      url: 'https://www.douyu.com' + ele.attr('href'),
      platformIcon: '/images/icon1.png',
      anchor: $(ele.find('h3.ellipsis')[0]).text(),
      category: $(ele.find('.tag')[0]).text(),
      onlineFlag: Boolean($(ele.find('.icon_live')).length),
    });
  });
  return liveJson
}

export default {}