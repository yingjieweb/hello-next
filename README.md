# Hello-next 👋

This repo is created for learning Next.js

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Conclusions 📒

Here are some conclusions I made while learning Next.js:

- Page File position is on behalf of its render route. If you want to create a page with `/posts/first-post`, you should create a file named `first-post.js` in the `posts` folder. No routing libraries are required. [Learn more about routing](https://nextjs.org/docs/pages/building-your-application/routing)

- `<Link>` tag from `next/link` is used to create a link to another page. Next.js automatically prefetches the code for the linked page in the background. And the browser does not load the full page and client-side navigation is working. [Here is an example](https://nextjs.org/learn/basics/navigate-between-pages/client-side). If you are interested in it or want to learn more, [click here](https://nextjs.org/docs/pages/api-reference/components/link).

- Next.js can serve static assets, like images, under the top-level `public directory`. Next.js provides an `Image` component from `next/image` to help you optimize the traditional `<img>` element. Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Images are lazy-loaded by default. To learn more about Automatic Image Optimization, check out the [documentation](https://nextjs.org/docs/pages/building-your-application/optimizing/images). To learn more about the Image component, check out the [API reference for next/image](https://nextjs.org/docs/pages/api-reference/components/image).

- The `Head` component from the `next/head` module is used instead of the lowercase `<head>` to modify the `<head>` of a page. To learn more about the Head component, check out the [API reference for next/head](https://nextjs.org/docs/pages/api-reference/components/head).

- In addition to metadata, scripts that need to load and execute as soon as possible are usually added within the `<head>` of a page. Although this approach works, including scripts in this manner does not give a clear idea of when it would load with respect to the other JavaScript code fetched on the same page. If a particular script is render-blocking and can delay page content from loading, this can significantly impact performance. You can add a third-party script to a Next.js page by `Script` component from `next/script`. [Learn more](https://nextjs.org/docs/pages/building-your-application/optimizing/scripts).

- `CSS modules` allow you to locally scope CSS at the component level by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about class name collisions. [Learn more](https://nextjs.org/docs/pages/building-your-application/styling#adding-component-level-css).

- If you want some CSS to be loaded by **every page**, Next.js has support for that as well. In Next.js, you can add global CSS files by importing them from `pages/_app.js`. You cannot import global CSS anywhere else. The default export of `_app.js` is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages or to add global styles as we're doing here. [Learn more](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)

- By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO. If you want to check it, you can try to disable JavaScript in your browser and see if the page still works.

- Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

  - Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
  - Server-side Rendering is the pre-rendering method that generates the HTML on each request.
  - Importantly, Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

- Static Generation can be done with and without data.

  - Those pages do not require fetching external data will automatically be statically generated when the app is built for production.
  - For some pages, you might not be able to render the HTML without first fetching some external data. Well, in Next.js, when you export a page component, you can also export an async function called `getStaticProps`.

- If you need to fetch data at request time instead of at build time, you can try Server-side Rendering: To use Server-side Rendering, you need to export `getServerSideProps` instead of `getStaticProps` from your page.

- Dynamic routes: How to statically generate pages with dynamic routes? If you want to statically generate a page at a path called `/posts/<id>`, where `<id>` can be dynamic. You need to create a page at `/pages/posts/[id].js` at first. The page file must contain:
  - A React component to render this page
  - Use `getStaticPaths` which returns an array of possible values for `<id>`
  - Use `getStaticProps` which fetches necessary data for the post with `<id>`
