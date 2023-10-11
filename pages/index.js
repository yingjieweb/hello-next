// components
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// styles
import utilStyles from "../styles/utils.module.css";
// API
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi 👋, I'm Yingjieweb 👻, a Front-end engineer with full-stack
          capabilities. Formerly <a href="https://www.sohu.com/">@sohu</a>{" "}
          staff. Currently work in{" "}
          <a href="https://www.fulltruckalliance.com/">@AMH</a>
        </p>
        <p>
          If you want to know more about me, here is my{" "}
          <a href="https://yingjieweb.github.io/">personal website</a> and{" "}
          <a href="https://github.com/yingjieweb">Github</a>. 👀
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
