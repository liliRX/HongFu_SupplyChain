export const navList = [
  { name: "首页", id: "homePage" },
  { name: "关于我们", id: "aboutUs" },
  { name: "核心服务", id: "service" },
  { name: "我们的优势", id: "advantage" },
  { name: "联系我们", id: "linkUs" }
];

//定义动画字体的数据
/* jshint esversion: 6 */
export const aboutUs = [
  { num: "9", add: "年", info: "成立于2015年" },
  { num: "1120", add: "", info: "客户" },
  { num: "200", add: "", info: "全国仓点" },
  { num: "500", add: "万M2", info: "仓库面积" }
];

//定义核心服务的数据
export const services = [
  { url: "src/assets/img/service-pic01.png", type: "干线运输" },
  { url: "src/assets/img/service-pic02.png", type: "电商云仓" },
  { url: "src/assets/img/service-pic03.png", type: "城市配送" },
  { url: "src/assets/img/service-pic04.png", type: "仓储物流" }
];

//define the data of advantage
export const advantages = [
  {
    title: "知名品牌战略合作伙伴",
    url: "src/assets/img/partner.png",
    description:
      "目前是国内日化龙头企业纳爱斯集团的战略合作伙伴，已健康合作近10年，服务质量具有品牌背书，值得信赖。"
  },
  {
    title: "自身实力雄厚，自有车辆数量可观",
    url: "src/assets/img/good.png",
    description:
      " 经过近些年的不断发展，我司注重服务质量的稳定性，因此不断投入资金采购物流车辆，截止目前已拥有自有车辆数十辆。"
  },
  {
    title: "深耕物流行业多年，可协调资源丰富",
    url: "src/assets/img/material_flow.png",
    description:
      "经过多年深耕，与行业知名物流公司诸如德邦、跨越、安能、安得、通达系有良好合作基础，形成了战略合作伙伴关系，可根据客户需要充分整合社会优质物流资源。"
  }
];

// 路由的地址
export const routeMap = [
  { route: "home", title: "首页" },
  { route: "aboutUs", title: "关于我们" },
  {
    route: "centerServices",
    title: "核心服务",
    children: [
      {
        route: "/ECommerceCloudWarehouse",
        title: "电商云仓"
      }
    ]
  },
  { route: "Advantage", title: "我们的优势" },
  { route: "linkUs", title: "联系我们" }
];
