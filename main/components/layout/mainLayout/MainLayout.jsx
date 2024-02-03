import Head from "next/head";
import Navbar from "../../ui/Navbar/Navbar";
import { useRouter } from "next/router";

export default function MainLayout({ children }) {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);
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
      <Navbar pathSegments={pathSegments} />
      <main>{children}</main>
    </>
  );
}
