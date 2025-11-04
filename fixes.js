document.addEventListener("DOMContentLoaded", function () {
      // Превод на основни заглавия
      const blogHeader = document.querySelector(".page-header h1");
      if (blogHeader && blogHeader.textContent.trim() === "Blog") {
        blogHeader.textContent = "Видео уроци";
      }

      // Превод на "Recent posts"
      const widgetTitle = document.querySelector(".widget-title span");
      if (widgetTitle && widgetTitle.textContent.trim() === "Recent posts") {
        widgetTitle.textContent = "Последни публикации";
      }

      // Превод на "Created at"
      document.querySelectorAll(".blog-meta span").forEach((el) => {
        el.textContent = el.textContent
          .replace("Created at", "Създадено на");
      });

      // Превод на "Read more"
      document.querySelectorAll(".blog-read-more a").forEach((el) => {
        el.innerHTML = el.innerHTML.replace("Read more", "Прочети повече");
    });
  });