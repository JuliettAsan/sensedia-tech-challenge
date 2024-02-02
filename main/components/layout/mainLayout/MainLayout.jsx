import Head from "next/head";
import Navbar from "../../ui/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>TECH CHALLENGE SCORE - JULIETT SANCHEZ</title>
        <meta
          name="description"
          content="Tech challege score manager by Juliett Sanchez Rodriguez"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
