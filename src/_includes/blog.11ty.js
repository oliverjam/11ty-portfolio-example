exports.data = {
  layout: "base",
};

exports.render = (data) => {
  return `
    <h1>${data.title}</h1>
    <div class="post">${data.content}</div>
  `;
};
