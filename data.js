const list = [];

for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    url: "http://mlib.wang",
    title: `Centralized State Management for Vue.js ${i}`
  });
}

module.exports = {
  list
};
