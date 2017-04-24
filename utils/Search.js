import {getAsync} from './client'
import {analysisUrl} from '../utils/utils'

export const search = (category, plateform, isHttps) => {
  return getAsync(encodeURI(analysisUrl(category, plateform)), isHttps)
}
