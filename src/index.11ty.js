exports.data = {
  layout: "base",
  title: "Home",
};

exports.render = () => {
  return /*html*/ `
    <link href="/assets/css/home.css" rel="stylesheet">
    <div class="big-sell">
      <img width="500" src="/assets/images/undraw_code_thinking.svg" alt="">
      <h1 style="--delay: 0.35s">I am a web developer</h1>
      <p style="--delay: 0.7s">Insert outlandish claims of competence here</p>
    </div>
  `;
};
