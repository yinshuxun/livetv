import {category, platform} from './basic.js'

export const analysisUrl = (cate, plat) => {
  return category[cate][plat]
}

/**
 * 将带万的字符串转换为具体的数值
 *
 * @param {string} text - 要转换的字符串
 * @return {Number | string} 返回计算后的结果
 */
export const transformAudienceNumber = text => {
  return text.indexOf('万') > 0 ? text.replace(/万/, '') * 10000 : text;
}

export const isHttps = url => {
  return typeof url === "string" && url.indexOf('https') > -1
}
