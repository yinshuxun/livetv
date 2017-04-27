import {getAsync} from './client'
import {analysisUrl} from '../utils/utils'

export const search = (category, plateform) => {
  return getAsync(encodeURI(analysisUrl(category, plateform)))
}
