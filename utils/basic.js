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
  'dnf': {
    name: 'DNF',
    panda: 'http://www.panda.tv/cate/dnf',
    douyu: 'https://www.douyu.com/directory/game/DNF',
    zhanqi: 'https://www.zhanqi.tv/games/dnf',
    huya: 'http://www.huya.com/g/2',
    quanmin: 'http://www.quanmin.tv/json/categories/dnf/list.json',
    longzhu: 'http://longzhu.com/channels/dnf',
  }
}

export const platform =  {
  panda: {
    name: '熊猫',
  },
  douyu: {
    name: '斗鱼',
  }
}

