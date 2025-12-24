import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'

const originUrl = 'https://to2026.xyz'

// 生成随机六位数字
function generateRandomSixDigits(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// 生成随机编号：hx + 六位随机数字
function generateUid(): string {
  return `hx${generateRandomSixDigits()}`
}

// 好听的中文姓名列表
const nameList = [
  '张伟',
  '王芳',
  '李娜',
  '刘强',
  '陈静',
  '杨洋',
  '赵敏',
  '黄磊',
  '周杰',
  '吴刚',
  '徐静',
  '朱军',
  '马超',
  '胡歌',
  '林志',
  '郭靖',
  '何炅',
  '罗志',
  '高圆圆',
  '梁朝',
  '郑爽',
  '韩寒',
  '冯小刚',
  '于谦',
  '董卿',
  '谢娜',
  '汪涵',
  '蔡康永',
  '小S',
  '大S',
  '范冰冰',
  '李冰冰',
  '章子怡',
  '周迅',
  '赵薇',
  '孙俪',
  '邓超',
  '黄晓明',
  '杨幂',
  '刘诗诗',
  '唐嫣',
  '佟丽娅',
  '迪丽热巴',
  '古力娜扎',
  '关晓彤',
  '欧阳娜娜',
  '张艺兴',
  '鹿晗',
  '吴亦凡',
  '黄子韬',
  '易烊千玺',
  '王俊凯',
  '王源',
  '蔡徐坤',
  '肖战',
  '王一博',
  '李现',
  '邓伦',
  '杨紫',
  '赵丽颖',
]

// 部门列表
const departmentList = [
  '工程部',
  '行政部',
  '人事部',
  '市场部',
  '营运部',
  '研发部',
  '信息部',
  '采购部',
  '审计部',
]

// 身份列表
const identityList = [
  '总经理',
  '总裁',
  '经理',
  '主管',
  '专员',
]

// 生成随机默认人员列表
function generateDefaultPersonList(count: number = 50): IPersonConfig[] {
  const personList: IPersonConfig[] = []
  const currentTime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })

  for (let i = 0; i < count; i++) {
    const randomName = nameList[Math.floor(Math.random() * nameList.length)]
    const randomDepartment = departmentList[Math.floor(Math.random() * departmentList.length)]
    const randomIdentity = identityList[Math.floor(Math.random() * identityList.length)]
    const randomAvatarIndex = Math.floor(Math.random() * 99) + 1
    const randomGender = Math.random() > 0.5 ? 'men' : 'women'

    // 计算 x, y 坐标（基于17列布局，每行17个）
    const x = (i % 17) + 1
    const y = Math.floor(i / 17) + 1

    personList.push({
      uid: generateUid(),
      name: randomName,
      department: randomDepartment,
      identity: randomIdentity,
      avatar: `https://randomuser.me/api/portraits/${randomGender}/${randomAvatarIndex}.jpg`,
      x,
      y,
      id: i,
      isWin: false,
      createTime: currentTime,
      updateTime: currentTime,
      prizeName: [],
      prizeTime: [],
      prizeId: [],
    })
  }

  return personList
}

// 导出生成函数，而不是直接导出数据，这样每次调用时都会生成新的随机数据
export function getDefaultPersonList(count: number = 50): IPersonConfig[] {
  return generateDefaultPersonList(count)
}

// 为了向后兼容，导出一个默认的列表（但建议使用 getDefaultPersonList 函数）
export const defaultPersonList = generateDefaultPersonList(50)

export const defaultMusicList = [
  {
    id: `Geoff Knorr - China (The Industrial Era).ogg${new Date().getTime().toString()}`,
    name: 'Geoff Knorr - China (The Industrial Era).ogg',
    url: `${originUrl}/resource/audio/Geoff Knorr - China (The Industrial Era).ogg`,
  },
  {
    id: `Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg${new Date().getTime().toString()}`,
    name: 'Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg',
    url: `${originUrl}/resource/audio/Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg`,
  },
  {
    id: `Radetzky March.mp3${new Date().getTime().toString()}`,
    name: 'Radetzky March.mp3',
    url: `${originUrl}/resource/audio/Radetzky March.mp3`,
  },
  {
    id: `Shanghai.mp3${new Date().getTime().toString()}`,
    name: 'Shanghai.mp3',
    url: `${originUrl}/resource/audio/Shanghai.mp3`,
  },
  {
    id: `Waltz No.2.mp3${new Date().getTime().toString()}`,
    name: 'Waltz No.2.mp3',
    url: `${originUrl}/resource/audio/Waltz No.2.mp3`,
  },
  {
    id: `WildChinaTheme.mp3${new Date().getTime().toString()}`,
    name: 'WildChinaTheme.mp3',
    url: `${originUrl}/resource/audio/WildChinaTheme.mp3`,
  },
  {
    id: `边程&房东的猫 - 美好事物-再遇少年.ogg${new Date().getTime().toString()}`,
    name: '边程&房东的猫 - 美好事物-再遇少年.ogg',
    url: `${originUrl}/resource/audio/边程&房东的猫 - 美好事物-再遇少年.ogg`,
  },
  {
    id: `大乔小乔 - 相见难别亦难.ogg${new Date().getTime().toString()}`,
    name: '大乔小乔 - 相见难别亦难.ogg',
    url: `${originUrl}/resource/audio/大乔小乔 - 相见难别亦难.ogg`,
  },
  {
    id: `你要跳舞吗-新裤子.mp3${new Date().getTime().toString()}`,
    name: '你要跳舞吗-新裤子.mp3',
    url: `${originUrl}/resource/audio/你要跳舞吗-新裤子.mp3`,
  },
  {
    id: `生命-声音玩具.mp3${new Date().getTime().toString()}`,
    name: '生命-声音玩具.mp3',
    url: `${originUrl}/resource/audio/生命-声音玩具.mp3`,
  },
  {
    id: `与非门 - Happy New Year.ogg${new Date().getTime().toString()}`,
    name: '与非门 - Happy New Year.ogg',
    url: `${originUrl}/resource/audio/与非门 - Happy New Year.ogg`,
  },

]

export const defaultPrizeList = <IPrizeConfig[]>[
  {
    id: '001',
    name: '三等奖',
    sort: 1,
    isAll: false,
    count: 3,
    isUsedCount: 0,
    picture: {
      id: '2',
      name: '三等奖',
      url: `${originUrl}/resource/image/image3.png`,
    },
    separateCount: {
      enable: true,
      countList: [],
    },
    desc: '三等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '002',
    name: '二等奖',
    sort: 2,
    isAll: false,
    count: 2,
    isUsedCount: 0,
    picture: {
      id: '1',
      name: '二等奖',
      url: `${originUrl}/resource/image/image2.png`,
    },
    separateCount: {
      enable: false,
      countList: [],
    },
    desc: '二等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '003',
    name: '一等奖',
    sort: 3,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
      id: '0',
      name: '一等奖',
      url: `${originUrl}/resource/image/image1.png`,
    },
    separateCount: {
      enable: false,
      countList: [],
    },
    desc: '一等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '004',
    name: '超级大奖',
    sort: 4,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
      id: '3',
      name: '超级奖',
      url: `${originUrl}/resource/image/image4.png`,
    },
    separateCount: {
      enable: false,
      countList: [],
    },
    desc: '超级大奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '005',
    name: '特别奖',
    sort: 5,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
      id: '4',
      name: '特别奖',
      url: `${originUrl}/resource/image/image5.png`,
    },
    separateCount: {
      enable: false,
      countList: [],
    },
    desc: '特别奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
]
export const defaultCurrentPrize = <IPrizeConfig>{
  id: '001',
  name: '三等奖',
  sort: 1,
  isAll: false,
  count: 12,
  isUsedCount: 0,
  picture: {
    id: '2',
    name: '三等奖',
    url: `${originUrl}/resource/image/image3.png`,
  },
  separateCount: {
    enable: true,
    countList: [],
  },
  desc: '三等奖',
  isShow: true,
  isUsed: false,
  frequency: 1,
}
export const defaultTemporaryPrize = <IPrizeConfig>{
  id: '',
  name: '',
  sort: 0,
  isAll: false,
  count: 1,
  isUsedCount: 0,
  picture: {
    id: '-1',
    name: '',
    url: '',
  },
  separateCount: {
    enable: true,
    countList: [],
  },
  desc: '',
  isShow: false,
  isUsed: false,
  frequency: 1,
}

export const defaultImageList = [
  {
    id: '0',
    name: '一等奖',
    url: `${originUrl}/resource/image/image1.png`,
  },
  {
    id: '1',
    name: '二等奖',
    url: `${originUrl}/resource/image/image2.png`,
  },
  {
    id: '2',
    name: '三等奖',
    url: `${originUrl}/resource/image/image3.png`,
  },
  {
    id: '3',
    name: '超级奖',
    url: `${originUrl}/resource/image/image4.png`,
  },
  {
    id: '4',
    name: '特别奖',
    url: `${originUrl}/resource/image/image5.png`,
  },
]
export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 93, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 65, 66, 67, 84, 101, 100, 99, 32, 33]
