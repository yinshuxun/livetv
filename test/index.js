import {search} from '../utils/search'
import {ana} from '../utils/dom-ana'

search('dnf', 'panda').then((ret) => {
    console.log(ana('panda', ret))
})