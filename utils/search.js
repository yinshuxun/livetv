import {getAsync} from './client'
import {analysisUrl} from '../utils/utils'

export const search = (category, plateform) => {
  console.log(analysisUrl(category, plateform))
  return getAsync(analysisUrl(category, plateform))
}