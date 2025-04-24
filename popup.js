import './contrib/js-yaml.min.js';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('./urls.yml');
  const text = await response.text();
  const data = jsyaml.load(text);

  const input = document.getElementById("query");

  chrome.storage.local.get("lastQuery", ({ lastQuery }) => {
    if (lastQuery && input) input.value = lastQuery;
  });

  function createTabs(key, query) {
    for (const u of data[key]) {
      chrome.tabs.create({ url: u.replace('%q', query) });
    }
  }

  function makeQuery(key) {
    const q = input?.value?.trim();
    if (!q) return;

    chrome.storage.local.set({ lastQuery: q });

    const query = encodeURIComponent(q);

    if (key !== "all") {
      createTabs(key, query);
    } else {
      for (const k of Object.keys(data)) {
        createTabs(k, query);
      }
    }
  }

  for (const k of Object.keys(data)) {
    document.getElementById(k)?.addEventListener('click', () => makeQuery(k));
  }
});
