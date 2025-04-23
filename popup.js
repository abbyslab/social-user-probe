document.getElementById("search").onclick = function() {
    const q = document.getElementById("query").value.trim();
    if (!q) return;
    const query = encodeURIComponent(q);
    const urls = [
      `https://www.google.com/search?q=site:instagram.com+"${query}"`,
      `https://www.tiktok.com/search/user?q=${query}`,
      `https://www.facebook.com/search/people/?q=${query}`,
      `https://www.linkedin.com/search/results/people/?keywords=${query}`,
      `https://x.com/search?q=${query}&src=typed_query&f=user`,
      `https://old.reddit.com/search/?q=${query}`,
      `https://www.snapchat.com/explore/${query}`,
      `https://pinterest.com/search/users/?q=${query}&filter_location=1&rs=content_type_filter`,
      `https://www.twitch.tv/search?term=${query}`,
      `https://steamcommunity.com/search/users/#text=${query}`,
      `https://onlyfindersearch.com/${query}/profiles/`,
      `https://github.com/search?q=${query}&type=users`,
      `https://medium.com/search/users?q=${query}`,
      `https://www.quora.com/search?q=${query}&type=profile`
    ];
    for (const u of urls) chrome.tabs.create({ url: u });
  };
  