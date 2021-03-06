var type_api = 'http://api.douyutv.com/api/v1/live/';
var room_api = 'http://open.douyucdn.cn/api/RoomApi/room/';

export const roomUrl = roomId => {
    return `${room_api}${roomId}`
};

export const typeUrl = type => {
    return `${type_api}${type}`
}

export const category = {
    'lol': {
        name: '英雄联盟',
        panda: 'http://www.panda.tv/cate/lol',
        douyu: 'https://www.douyu.com/directory/game/LOL',
        zhanqi: 'https://www.zhanqi.tv/games/lol',
        huya: 'http://www.huya.com/cache.php?m=Game&do=ajaxGameLiveByPage&gid=1&page=1',
        quanmin: 'http://www.quanmin.tv/json/categories/lol/list.json',
        longzhu: 'http://longzhu.com/channels/lol',
    },
    'hearthstone': {
        name: '炉石传说',
        panda: 'http://www.panda.tv/cate/hearthstone',
        douyu: 'https://www.douyu.com/directory/game/How',
        zhanqi: 'https://www.zhanqi.tv/chns/blizzard/how',
        huya: 'http://www.huya.com/g/393',
        quanmin: 'http://www.quanmin.tv/json/categories/heartstone/list.json',
        longzhu: 'http://longzhu.com/channels/hs',
    },
    'overwatch': {
        name: '守望先锋',
        panda: 'http://www.panda.tv/cate/overwatch',
        douyu: 'https://www.douyu.com/directory/game/Overwatch',
        zhanqi: 'https://www.zhanqi.tv/chns/blizzard/watch',
        huya: 'http://www.huya.com/g/2174',
        quanmin: 'http://www.quanmin.tv/json/categories/overwatch/list.json',
        longzhu: 'http://longzhu.com/channels/ow',
    },
    'dota2': {
        name: 'DOTA2',
        panda: 'http://www.panda.tv/cate/dota2',
        douyu: 'https://www.douyu.com/directory/game/DOTA2',
        zhanqi: 'https://www.zhanqi.tv/games/dota2',
        huya: 'http://www.huya.com/g/7',
        quanmin: 'http://www.quanmin.tv/json/categories/dota2/list.json',
    },
    'wow': {
        name: '魔兽世界',
        panda: 'http://www.panda.tv/cate/wow',
        douyu: 'https://www.douyu.com/directory/game/WOW',
        zhanqi: 'https://www.zhanqi.tv/chns/blizzard/wow',
        huya: 'http://www.huya.com/g/8',
        quanmin: 'http://www.quanmin.tv/json/categories/blizzard/list.json',
        longzhu: 'http://longzhu.com/channels/wow',
    },
    'CSGO': {
        name: 'CSGO',
        panda: 'http://www.panda.tv/cate/csgo',
        douyu: 'https://www.douyu.com/directory/game/CSGO',
        zhanqi: 'https://www.zhanqi.tv/games/csgo',
        huya: 'http://www.huya.com/g/862',
        longzhu: 'http://longzhu.com/channels/csgo',
    },
    'cf': {
        name: '穿越火线',
        panda: 'http://www.panda.tv/cate/cf',
        douyu: 'https://www.douyu.com/directory/game/CF',
        zhanqi: 'https://www.zhanqi.tv/games/CrossFire',
        huya: 'http://www.huya.com/g/4',
        quanmin: 'http://www.quanmin.tv/json/categories/cfpc/list.json',
        longzhu: 'http://longzhu.com/channels/cf',
    },
    'dnf': {
        name: 'DNF',
        panda: 'http://www.panda.tv/cate/dnf',
        douyu: 'https://www.douyu.com/directory/game/DNF',
        zhanqi: 'https://www.zhanqi.tv/games/dnf',
        huya: 'http://www.huya.com/g/2',
        quanmin: 'http://www.quanmin.tv/json/categories/dnf/list.json',
        longzhu: 'http://longzhu.com/channels/dnf',
    },
    'beauty': {
        name: '美女主播',
        panda: 'http://www.panda.tv/cate/yzdr',
        douyu: 'https://www.douyu.com/directory/game/yz',
        huya: 'http://www.huya.com/g/1663',
        quanmin: 'http://www.quanmin.tv/json/categories/beauty/list.json',
        longzhu: 'http://longzhu.com/channels/belle',
    }
}

export const platform = {

    panda: {
        name: '熊猫',
    },
    douyu: {
        name: '斗鱼',
    },
    zhanqi: {
        name: '战旗',
    },
    huya: {
        name: '虎牙',
    },
    quanmin: {
        name: '全民',
    },
    longzhu: {
        name: '龙珠',
    },
    all: {
        name: '所有平台'
    }
}

