import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // Load this particular script lazily during browser idle time.
        onLoad={() =>
          // run any JavaScript code immediately after the script has finished loading.
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  );
}
