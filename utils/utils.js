import {category,platform} from './basic.js'

export const analysisUrl = (cate, plat) => {
  return category[cate][plat]
}