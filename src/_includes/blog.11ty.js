exports.data = {
  layout: "base",
};

exports.render = (data) => {
  return `
    <h1>${data.title}</h1>
    <main class="post">${data.content}</main>
  `;
};
