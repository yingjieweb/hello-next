import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
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
    </Layout>
  );
}
