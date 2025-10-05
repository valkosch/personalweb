  async function loadRecentPosts() {
    const container = document.getElementById("posts-container")

    try {
      const response = await fetch("https://blog.v41k0.xyz/blog/rss.xml");
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");

      const items = Array.from(xml.querySelectorAll("item")).slice(0, 5);

      items.forEach(item => {
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;
        const date = item.querySelector("pubDate")?.textContent || '';
        const description = item.querySelector("description")?.textContent || '';
        const categories = Array.from(item.querySelectorAll("category"))
          .map(cat => `<a style="text-decoration: none; color: lime" href=\"https://blog.v41k0.xyz/blog/tags/${cat.textContent.trim().toLowerCase()}\">${cat.textContent.trim()}</a>`)
          .join(" #");

        const postEl = document.createElement("div");
        postEl.style.padding = "10px";
        postEl.style.borderRadius = "8px";
        postEl.style.backgroundColor = "#111";

        postEl.innerHTML = `
          <h3 style="margin: 0 0 5px;"><a href="${link}" class="link-hover">${title}</a></h3>
          <small style="color: gray;">${new Date(date).toLocaleString()}</small>
          <small style="color: lime;">#${categories}</small>
          <p style="margin-top: 5px;">${description.substring(0, 120)}...</p>
        `;

        container.appendChild(postEl);
      });

    } catch (err) {
      console.error("RSS load error:", err);
    }
  }

  loadRecentPosts();

