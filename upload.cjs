const sftpUploader = require("sftp-uploader");

//上传配置
// 基本
const basicConfig = {
  dir: "dist/", // 需要上传文件的目录
  url: "/home/front_end/hongfu_official_website/", // 上传到的目录
  username: "root", // 账号
  // 延迟上传时间（毫秒），解决部分项目会触发多次打包完成的问题
  delay: 0,
  // 上传文件过滤器，可以过滤掉不需要的文件，返回false将不会上传该文件（可选）
  //   uploadFilter: file => {
  //     console.log(file)
  //     return false
  //   },
  //! 删除文件过滤器，可以过滤掉不需要删除的文件，返回false将不会删除文件（可选）
  //!!! 注意这里，如果不返回false,会将上传目录下的所有文件清空
  deleteFilter: (file) => {
    return false;
  }
  // 预览链接接地址（可选）
  // previewPath: ""
};

const config = {
  test: {
    host: "192.168.222.232",
    password: "Nicehzvm@232"
  },
  product: {
    host: "192.168.222.219",
    password: "Nicehzvm@219"
  },
  img: {
    dir: "src/assets/", // 需要上传文件的目录
    host: "192.168.222.232",
    password: "Nicehzvm@232",
    url: "/usr/local/share/static_resource_file/hongfu_official_website/" // 上传到的目录
  }
};

//当前环境配置
const currentConfig = config[process.argv[2]];

new sftpUploader({ ...basicConfig, ...currentConfig }).put();
