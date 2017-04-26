import {search} from '../utils/search'
import {douyuAna} from '../utils/dom-ana'

search('dnf', 'douyu', true).then((ret) => {
  console.log(douyuAna(ret))
})