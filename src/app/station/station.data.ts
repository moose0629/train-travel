import { MainStation, Station, SubStation } from './station.domain';

/**
 * 基隆市
 */
const KEELUNG_CITY_STATIONS: MainStation = {
  name: '基隆市',
  subStations: [
    { name: '基隆' },
    { name: '三坑' },
    { name: '八堵' },
    { name: '七堵' },
    { name: '百福' },
    { name: '海科館', isBranchLine: true, branchName: ['深澳線'] },
    { name: '暖暖' },
  ],
};

/**
 * 新北市
 */
const NEW_TAIPEI_CITY_STATIONS: MainStation = {
  name: '新北市',
  subStations: [
    { name: '五堵', invalid: true },
    { name: '汐止', invalid: true },
    { name: '汐科', invalid: true },
    { name: '板橋', invalid: true },
    { name: '浮洲', invalid: true },
    { name: '樹林', invalid: true },
    { name: '南樹林', invalid: true },
    { name: '山佳', invalid: true },
    { name: '鶯歌', invalid: true },
    { name: '鳳鳴' },
    { name: '福隆' },
    { name: '貢寮' },
    { name: '雙溪' },
    { name: '牡丹' },
    { name: '三貂嶺', isBranchLine: true, branchName: ['平溪線'] },
    { name: '大華', isBranchLine: true, branchName: ['平溪線'] },
    { name: '十分', isBranchLine: true, branchName: ['平溪線'] },
    { name: '望古', isBranchLine: true, branchName: ['平溪線'] },
    { name: '嶺腳', isBranchLine: true, branchName: ['平溪線'] },
    { name: '平溪', isBranchLine: true, branchName: ['平溪線'] },
    { name: '菁桐', isBranchLine: true, branchName: ['平溪線'] },
    { name: '猴硐' },
    { name: '瑞芳', isBranchLine: true, branchName: ['深澳線'] },
    { name: '八斗子', isBranchLine: true, branchName: ['深澳線'] },
    { name: '四腳亭' },
  ],
};

/**
 * 臺北市
 */
const TAIPEI_CITY_STATIONS: MainStation = {
  name: '臺北市',
  subStations: [
    { name: '南港', invalid: true },
    { name: '松山', invalid: true },
    { name: '臺北', invalid: true },
    { name: '萬華', invalid: true },
  ],
};

/**
 * 桃園市
 */
const TAOYUAN_CITY_STATIONS: MainStation = {
  name: '桃園市',
  subStations: [
    { name: '桃園', invalid: true },
    { name: '內壢', invalid: true },
    { name: '中壢', invalid: true },
    { name: '埔心' },
    { name: '楊梅' },
    { name: '富岡' },
    { name: '新富' },
  ],
};

/**
 * 新竹縣
 */
const HSINCHU_COUNTY_STATIONS: MainStation = {
  name: '新竹縣',
  subStations: [
    { name: '北湖', invalid: true },
    { name: '湖口' },
    { name: '新豐' },
    { name: '竹北', invalid: true },
    {
      name: '竹中',
      invalid: true,
      isBranchLine: true,
      branchName: ['六家線', '內灣線'],
    },
    { name: '六家', invalid: true, isBranchLine: true, branchName: ['六家線'] },
    { name: '上員', isBranchLine: true, branchName: ['內灣線'] },
    { name: '榮華', isBranchLine: true, branchName: ['內灣線'] },
    { name: '竹東', isBranchLine: true, branchName: ['內灣線'] },
    { name: '橫山', isBranchLine: true, branchName: ['內灣線'] },
    { name: '九讚頭', isBranchLine: true, branchName: ['內灣線'] },
    { name: '合興', isBranchLine: true, branchName: ['內灣線'] },
    { name: '富貴', isBranchLine: true, branchName: ['內灣線'] },
    { name: '內灣', isBranchLine: true, branchName: ['內灣線'] },
  ],
};

/**
 * 新竹市
 */
const HSINCHU_CITY_STATIONS: MainStation = {
  name: '新竹市',
  subStations: [
    {
      name: '北新竹',
      invalid: true,
      isBranchLine: true,
      branchName: ['內灣線'],
    },
    { name: '千甲', isBranchLine: true, branchName: ['內灣線'] },
    { name: '新莊', isBranchLine: true, branchName: ['內灣線'] },
    { name: '新竹', invalid: true },
    { name: '三姓橋' },
    { name: '香山', invalid: true },
  ],
};

/**
 * 苗栗縣
 */
const MIAOLI_COUNTY_STATIONS: MainStation = {
  name: '苗栗縣',
  subStations: [
    { name: '崎頂' },
    { name: '竹南', invalid: true },
    { name: '談文' },
    { name: '大山' },
    { name: '後龍' },
    { name: '龍港' },
    { name: '白沙屯' },
    { name: '新埔' },
    { name: '通宵' },
    { name: '苑裡' },
    { name: '造橋' },
    { name: '豐富' },
    { name: '苗栗', invalid: true },
    { name: '南勢' },
    { name: '銅鑼' },
    { name: '三義' },
  ],
};

/**
 * 臺中市
 */
const TAICHUNG_CITY_STATIONS: MainStation = {
  name: '臺中市',
  subStations: [
    { name: '日南' },
    { name: '大甲' },
    { name: '臺中港' },
    { name: '清水' },
    { name: '沙鹿' },
    { name: '龍井' },
    { name: '大肚' },
    { name: '追分', isBranchLine: true, branchName: ['成追線'] },
    { name: '泰安' },
    { name: '后里' },
    { name: '豐原', invalid: true },
    { name: '栗林' },
    { name: '潭子', invalid: true },
    { name: '頭家厝' },
    { name: '松竹', invalid: true },
    { name: '太原', invalid: true },
    { name: '精武' },
    { name: '臺中', invalid: true },
    { name: '五權' },
    { name: '大慶', invalid: true },
    { name: '烏日', invalid: true },
    { name: '新烏日', invalid: true },
    { name: '成功', isBranchLine: true, branchName: ['成追線'] },
  ],
};

/**
 * 彰化縣
 */
const CHANGHUA_COUNTY_STATIONS: MainStation = {
  name: '彰化縣',
  subStations: [
    { name: '彰化', invalid: true },
    { name: '花壇' },
    { name: '大村' },
    { name: '員林', invalid: true },
    { name: '永靖' },
    { name: '社頭' },
    { name: '田中' },
    { name: '二水', isBranchLine: true, branchName: ['集集線'] },
    { name: '源泉', isBranchLine: true, branchName: ['集集線'] },
  ],
};

/**
 * 雲林縣
 */
const YUNLIN_COUNTY_STATIONS: MainStation = {
  name: '雲林縣',
  subStations: [
    { name: '林內' },
    { name: '石榴' },
    { name: '斗六', invalid: true },
    { name: '斗南', invalid: true },
    { name: '石龜' },
  ],
};

/**
 * 南投縣
 */
const NANTOU_COUNTY_STATIONS: MainStation = {
  name: '南投縣',
  subStations: [
    { name: '濁水', isBranchLine: true, branchName: ['集集線'] },
    { name: '龍泉', isBranchLine: true, branchName: ['集集線'] },
    { name: '集集', invalid: true, isBranchLine: true, branchName: ['集集線'] },
    { name: '水里', invalid: true, isBranchLine: true, branchName: ['集集線'] },
    { name: '車埕', invalid: true, isBranchLine: true, branchName: ['集集線'] },
  ],
};

/**
 * 嘉義縣
 */
const CHIAYI_COUNTY_STATIONS: MainStation = {
  name: '嘉義縣',
  subStations: [
    { name: '大林' },
    { name: '民雄' },
    { name: '水上' },
    { name: '南靖' },
  ],
};

/**
 * 嘉義市
 */
const CHIAYI_CITY_STATIONS: MainStation = {
  name: '嘉義市',
  subStations: [{ name: '嘉北' }, { name: '嘉義', invalid: true }],
};

/**
 * 臺南市
 */
const TAINAN_CITY_STATIONS: MainStation = {
  name: '臺南市',
  subStations: [
    { name: '後壁' },
    { name: '新營' },
    { name: '柳營' },
    { name: '林鳳營' },
    { name: '隆田' },
    { name: '拔林' },
    { name: '善化', invalid: true },
    { name: '南科' },
    { name: '新市' },
    { name: '永康', invalid: true },
    { name: '大橋' },
    { name: '臺南', invalid: true },
    { name: '保安' },
    { name: '仁德' },
    { name: '中洲', isBranchLine: true, branchName: ['沙崙線'] },
    { name: '長榮大學', isBranchLine: true, branchName: ['沙崙線'] },
    { name: '沙崙', isBranchLine: true, branchName: ['沙崙線'] },
  ],
};

/**
 * 高雄市
 */
const KAOHSIUNG_CITY_STATIONS: MainStation = {
  name: '高雄市',
  subStations: [
    { name: '大湖' },
    { name: '路竹' },
    { name: '岡山' },
    { name: '橋頭' },
    { name: '楠梓' },
    { name: '新左營', invalid: true },
    { name: '左營', invalid: true },
    { name: '內惟' },
    { name: '美術館' },
    { name: '鼓山' },
    { name: '三塊厝' },
    { name: '高雄', invalid: true },
    { name: '民族' },
    { name: '科工館' },
    { name: '正義' },
    { name: '鳳山' },
    { name: '後庄' },
    { name: '九曲堂' },
  ],
};

/**
 * 屏東縣
 */
const PINGTUNG_COUNTY_STATIONS: MainStation = {
  name: '屏東縣',
  subStations: [
    { name: '六塊厝', invalid: true },
    { name: '屏東', invalid: true },
    { name: '歸來', invalid: true },
    { name: '麟洛', invalid: true },
    { name: '西勢', invalid: true },
    { name: '竹田', invalid: true },
    { name: '潮州', invalid: true },
    { name: '崁頂', invalid: true },
    { name: '南州', invalid: true },
    { name: '鎮安', invalid: true },
    { name: '林邊', invalid: true },
    { name: '佳冬', invalid: true },
    { name: '東海', invalid: true },
    { name: '枋寮', invalid: true },
    { name: '加祿', invalid: true },
    { name: '內獅', invalid: true },
    { name: '枋山', invalid: true },
  ],
};

/**
 * 臺東縣
 */
const TAITUNG_COUNTY_STATIONS: MainStation = {
  name: '臺東縣',
  subStations: [
    { name: '大武', invalid: true },
    { name: '溯溪', invalid: true },
    { name: '金崙', invalid: true },
    { name: '太麻里', invalid: true },
    { name: '知本', invalid: true },
    { name: '康樂', invalid: true },
    { name: '臺東', invalid: true },
    { name: '山里', invalid: true },
    { name: '鹿野', invalid: true },
    { name: '瑞源', invalid: true },
    { name: '瑞和', invalid: true },
    { name: '關山', invalid: true },
    { name: '海端', invalid: true },
    { name: '池上', invalid: true },
  ],
};

/**
 * 花蓮縣
 */
const HUALIEN_COUNTY_STATIONS: MainStation = {
  name: '花蓮縣',
  subStations: [
    { name: '富里', invalid: true },
    { name: '東竹', invalid: true },
    { name: '東里', invalid: true },
    { name: '玉里' },
    { name: '三民', invalid: true },
    { name: '瑞穗' },
    { name: '富源' },
    { name: '大富', invalid: true },
    { name: '光復' },
    { name: '萬榮' },
    { name: '鳳林' },
    { name: '南平', invalid: true },
    { name: '林榮新光', invalid: true },
    { name: '豐田' },
    { name: '壽豐' },
    { name: '平和', invalid: true },
    { name: '志學' },
    { name: '吉安' },
    { name: '花蓮' },
    { name: '北埔', invalid: true },
    { name: '景美', invalid: true },
    { name: '新城' },
    { name: '崇德', invalid: true },
    { name: '和仁', invalid: true },
    { name: '和平', invalid: true },
  ],
};
/**
 * 宜蘭縣
 */
const YILAN_COUNTY_STATIONS: MainStation = {
  name: '宜蘭縣',
  subStations: [
    { name: '漢本' },
    { name: '武塔' },
    { name: '南澳' },
    { name: '東澳' },
    { name: '永樂' },
    { name: '蘇澳' },
    { name: '蘇澳新' },
    { name: '冬山' },
    { name: '羅東', invalid: true },
    { name: '中里' },
    { name: '二結' },
    { name: '宜蘭', invalid: true },
    { name: '四城' },
    { name: '礁溪', invalid: true },
    { name: '頂埔' },
    { name: '頭城', invalid: true },
    { name: '外澳' },
    { name: '龜山' },
    { name: '大溪' },
    { name: '大里' },
    { name: '石城' },
  ],
};

const STATIONS: Station[] = [
  KEELUNG_CITY_STATIONS,
  NEW_TAIPEI_CITY_STATIONS,
  TAIPEI_CITY_STATIONS,
  TAOYUAN_CITY_STATIONS,
  HSINCHU_COUNTY_STATIONS,
  HSINCHU_CITY_STATIONS,
  MIAOLI_COUNTY_STATIONS,
  TAICHUNG_CITY_STATIONS,
  CHANGHUA_COUNTY_STATIONS,
  NANTOU_COUNTY_STATIONS,
  YUNLIN_COUNTY_STATIONS,
  CHIAYI_COUNTY_STATIONS,
  CHIAYI_CITY_STATIONS,
  TAINAN_CITY_STATIONS,
  KAOHSIUNG_CITY_STATIONS,
  PINGTUNG_COUNTY_STATIONS,
  TAITUNG_COUNTY_STATIONS,
  HUALIEN_COUNTY_STATIONS,
  YILAN_COUNTY_STATIONS,
];

export default STATIONS.map((station: Station) => {
  const subStations = (station as MainStation).subStations;
  const validSubStations = subStations
    .filter((station: SubStation) => !station.invalid)
    .map((subStation: SubStation) => {
      subStation.region = station.name;
      return subStation;
    });
  return validSubStations.length > 0
    ? { name: station.name, subStations: validSubStations }
    : null;
}).filter((station) => !!station);
