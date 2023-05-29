// 计算缩放比例
import { useScaleStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";

// 用scale做缩放比例
export function setRate(contianer = [".body", ".out-body"]) {
  const body = document.querySelector(contianer[0]);
  const out_body = document.querySelector(contianer[1]);
  const { rate } = storeToRefs(useScaleStore());
  body.style.transform = `scale(${rate.value})`;
  body.style.msTransform = `scale(${rate.value})`;
  body.style.mozTransform = `scale(${rate.value})`;
  body.style.webkitTransform = `scale(${rate.value})`;
  body.style.oTransform = `scale(${rate.value})`;
  let bodyHeight = body.offsetHeight * rate.value;
  out_body.style.height = bodyHeight + "px";
}

// 防抖
export function debounce(fn, wait) {
  let timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}

// 打开新的页面
export const goNewPage = (path, params = {}) => {
  localStorage.setItem("lastPage", window.location.href);
  let url = window.location.origin;
  const { pathname } = window.location;
  if (path.indexOf("http") === -1) url = `${url}${pathname}#${path}`;
  else url = path;

  const keys = Object.keys(params);
  if (keys.length === 1 && keys[0] === "") url += `${params[""]}`;
  else if (keys.length !== 0) {
    url += "?";
    const req = keys.map((item) => `${item}=${params[item]}`).join("&");
    url += req;
  }
  localStorage.setItem("freeVersionLoad", JSON.stringify(false));
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.click();
};
