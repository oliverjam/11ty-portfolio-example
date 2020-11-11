exports.data = {
  layout: "base",
};

exports.render = (data) => {
  return /*html*/ `
    <link href="/assets/blog.css" rel="stylesheet">
    <div class="post">
      <h1>${data.title}</h1>
      <div class="post__content">
        ${data.content}
      </div>
    </div>
  `;
};
