import MainLayout from "@/main/components/layout/mainLayout/MainLayout";
import Link from "next/link";

function Error({ statusCode }) {
  return (
    <MainLayout
      meta={{
        title: "Error | TECH CHALLENGE SCORE - JULIETT SANCHEZ",
      }}
    >
      <div
        className={`banner-simple-slide`}
        style={{
          marginTop: "12rem",
          backgroundColor: "#e2e2e2",
          minHeight: "80vh",
        }}
      >
        <div className="banner-simple-slide-col-2">
          <span className="is-bold is-size-2">ERROR {statusCode}</span>
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
          <Link className="button is-purple " href={"/"}>
            Ir a la página de inicio <span className="icon icon-flecha"></span>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
