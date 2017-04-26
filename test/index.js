import {search} from '../utils/search'
import {douyuAna} from '../utils/dom-ana'

search('dnf', 'douyu').then((ret) => {
  console.log(douyuAna(ret))
})