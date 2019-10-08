import axios from "axios";

let cache = {};

export function getData(key) {
  if (cache[key]) return Promise.resolve(cache[key]);
  else {
    if (window.localStorage.getItem(key)) {
      let data = JSON.parse(window.localStorage.getItem(key));
      cache[key] = data;
      return Promise.resolve(cache[key]);
    } else {
      return axios.get(`/api/${key}.json`).then(res => {
        cache[key] = res.data;
        return cache[key];
      });
    }
  }
}

export function setData(key, data) {
  return Promise.resolve(
    window.localStorage.setItem(key, JSON.stringify(data))
  );
}
