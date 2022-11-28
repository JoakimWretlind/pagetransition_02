import Head from "next/head";
import path from "path";
import fs from "fs/promises";
import { HomePage } from "/components/peopleSection/homePage";

export default function Home({ peoples }) {
  return (
    <>
      <Head>
        <title>Page Transition</title>
        <meta name="PageTransition" content="Routing, Transition" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <HomePage peoples={peoples} />
    </>
  );
}

/** Get the Data **/
export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "utils", "data", "peopleData.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      peoples: data.peoples,
    },
  };
};
