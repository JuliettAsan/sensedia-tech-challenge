import MainLayout from "@/main/components/layout/mainLayout/MainLayout";
import Link from "next/link";

function Error({ statusCode }) {
  return (
    <MainLayout
      meta={{
        title: "Error | TECH CHALLENGE SCORE - JULIETT SANCHEZ",
      }}
    >
      <div className="space-box is-red is-medium"></div>

      <div
        className={`banner-simple-slide  `}
        style={{
          paddingBottom: "4rem",
        }}
      >
        <div className="banner-simple-slide-col-1">
          <span className="is-color-red is-bold is-size-2">
            ERROR {statusCode}
          </span>
          <h3>
            {statusCode === 404
              ? "PÁGINA NO ENCONTRADA"
              : "ESTÁ PÁGINA NO ESTÁ FUNCIONANDO"}
          </h3>
          <p className="subtitle">
            {statusCode == 404
              ? "Lo sentimos, no podemos encontrar la página que solicitaste."
              : "Lo sentimos, hubo un error inesperado. Inténtalo de nuevo más tarde."}
          </p>
          <Link className="btn " href={"/"}>
            Ir a la página de inicio <span className="icon icon-flecha"></span>
          </Link>
        </div>
        <div
          className="banner-simple-slide-col-2"
          style={{
            backgroundImage: `url(/assets/error.png)`,
          }}
        ></div>
      </div>
    </MainLayout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
