import axios from "axios";

let cache = {};

export function getData(key) {
  if (cache[key]) return Promise.resolve(cache[key]);
  else {
    return axios.get(`/api/${key}.json`).then(res => {
      cache[key] = res.data;
      return cache[key];
    });
  }
}
