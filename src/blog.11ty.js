exports.data = {
  layout: "base",
  title: "Blog",
};

exports.render = (data) => {
  const posts = data.collections.blog;
  return /*html*/ `
    <link href="/assets/css/blog.css" rel="stylesheet">
    <div class="posts-wrapper">
      <h1>My blog</h1>
      <ul class="posts">
        ${posts
          .map((post, i) => {
            return /*html*/ `
              <li class="post" style="--delay: ${i / 4}s">
                <a href="${post.url}">${post.data.title}</a>
              </li>
            `;
          })
          .join("")}
      </ul>      
    </div>
  `;
};
