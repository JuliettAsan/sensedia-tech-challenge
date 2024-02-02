import "@/styles/globals.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
