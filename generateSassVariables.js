import * as fs from "fs";

function generateSassVariables() {
  const sourceURL = getSourceURL();

  const content = `$source-url: '${sourceURL}';`;

  fs.writeFileSync("src/assets/_variables.scss", content, "utf-8");
}

function getSourceURL() {
  const nav = process.argv[2];

  // 根据不同的网址返回相应的颜色
  if (nav === "local") {
    return "http://192.168.222.232:8002/static_resource_file/hongfu_official_website";
  } else if (nav === "test") {
    return "http://192.168.222.232:8002/static_resource_file/hongfu_official_website";
  } else {
    return "/hongfu_official_website_source";
  }
}

generateSassVariables();
