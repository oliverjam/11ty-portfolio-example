exports.render = (data) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${data.title} | Oliver's portfolio</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
        </nav>
        ${data.content}
      </body>
    </html>
  `;
};
