import Head from "next/head";
import Navbar from "../../ui/Navbar/Navbar";
import { useRouter } from "next/router";
import user from "../../../../data/user-data.json";
import Footer from "../../ui/Footer/Footer";

const MainLayout = ({ children, meta = {} }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);

  return (
    <>
      <Head>
        <title>{meta?.title || "TECH CHALLENGE"}</title>
        <meta
          name="description"
          content="Tech challege score manager by Juliett Sanchez Rodriguez"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar pathSegments={pathSegments} user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
