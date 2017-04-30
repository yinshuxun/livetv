'use strict';

import Base from './base.js';

export default class extends Base {
    detailAction(){
        return this.success({email: "xxx@gmail.co111m"})
    }
}