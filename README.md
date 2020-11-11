# Eleventy Portfolio Example

An example portfolio site built with the [Eleventy](https://11ty.dev/) static site generator.

![Screenshot of the portfolio's homepage](https://user-images.githubusercontent.com/9408641/98876783-e912db00-2476-11eb-8576-cacf50eb30c2.png)

## Run locally

You'll need git, Node and npm installed on your machine.

1. Clone this repo and `cd` into the directory
1. Run `npm install` to install dependencies (just Eleventy)
1. Run `npm run dev` to start a development server

## Structure

Most pages are create from JavaScript templates (with `.11ty.js` extensions). They use the `_includes/base.11ty.js` layout.

Blog posts are defined as markdown files (in the `blog/` directory). They use the `_includes.post.11ty.js` layout (which itself uses the base layout: Eleventy lets you chain layouts to avoid duplication).

Styles are defined in `.css` files inside `assets/css`. Each page includes its own custom styles (as well as `base.css` which is included on all pages).

Some global data about the site/author is set in `_data/site.json`. This is used mostly for the site footer.
