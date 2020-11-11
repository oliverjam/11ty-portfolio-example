exports.data = {
  layout: "base",
};

exports.render = (data) => {
  const machineDate = data.date.toISOString();
  const humanDate = new Intl.DateTimeFormat("en-gb", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(data.date);

  return /*html*/ `
    <link href="/assets/css/blog.css" rel="stylesheet">
    <div class="post">
      <header class="post__header">
        <h1>${data.title}</h1>
        <time datetime="${machineDate}">${humanDate}</time>
      </header>
      <div class="post__content">
      ${data.content}
      </div>
    </div>
  `;
};
