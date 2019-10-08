import axios from "axios";

let cache = {};
let categories = [];
let entries = [];
let initialized = false;

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

export async function initializeData() {
  categories = await getData("categories");
  entries = await getData("entries").then(entries => {
    entries = entries.map(entry => {
      entry = calcPath(entry);
      return entry;
    });
    return entries;
  });
  initialized = true;
}

export function getCategories() {
  if (initialized) return Promise.resolve(categories);
  else
    return initializeData().then(() => {
      return categories;
    });
}

export function getEntries() {
  if (initialized) return Promise.resolve(entries);
  else
    return initializeData().then(() => {
      return entries;
    });
}

function calcPath(entry) {
  entry.path = [];
  let category = categories.find(cat => cat.id == entry.category);
  entry.path.push(category.title);
  if (entry.subCategory) {
    let subCat = category.subCategories.find(
      cat => cat.id == entry.subCategory
    );
    entry.path.push(subCat.title);
  }
  return entry;
}

export function getEditItem(entryId) {
  let entry;
  let entryIndex;
  if (entryId) {
    entryIndex = entries.findIndex(e => e.id == entryId);
    entry = Object.assign({}, entries[entryIndex]);
  } else {
    entryIndex = entries.length;
    entry = {
      id: entries.length + 1000,
      category: null,
      subCategory: null,
      title: null,
      url: null,
      description: null
    };
  }

  let updateMethod = item => {
    item = calcPath(item);
    entries.splice(entryIndex, 1, item);
    setData("entries", entries);
  };
  return {
    entry,
    updateMethod
  };
}
