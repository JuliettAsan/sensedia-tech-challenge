import Link from "next/link";
import styles from "./styles.module.scss";

export default function User({ data }) {
  const { name, email } = data;
  return (
    <div className={`container ${styles.user}`}>
      <h2 className="is-text-black02 fs-5 is-bold">Perfil del usuario</h2>
      <div
        className={`banner-simple-slide`}
        style={{
          paddingBottom: "4rem",
          minHeight: "50vh",
        }}
      >
        <div
          className="banner-simple-slide-col-1 image"
          style={{
            backgroundImage: `url(/assets/profile.png)`,
          }}
        ></div>
        <div className="banner-simple-slide-col-2">
          <span className="is-bold is-size-2">USUARIO</span>

          <h3 className="is-text-purple">
            <span>{name}</span>
          </h3>
          <div>
            <p className="subtitle is-regular">Email : {email}</p>
          </div>
          <div className="content">
            <span>
              <p>Posts</p>
              10
            </span>
            <span>
              <p>Albums</p>
              10
            </span>
          </div>

          <Link className="button is-purple" href={"/"}>
            Ir a la página de inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
