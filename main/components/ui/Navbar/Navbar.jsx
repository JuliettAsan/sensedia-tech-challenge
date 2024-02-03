import Image from "next/image";
import Link from "next/link";

export default function Navbar({ pathSegments }) {
  return (
    <div className="navbar">
      {/* Section Logo  */}
      <div className="navbar-logo">
        <Link href="/">
          <Image
            src={"/Logo_ScoreManager.png"}
            alt="Logo Sensedia Score Manager"
            aria-label="Logo Sensedia Score Manager"
            fill={true}
            priority={true}
          />
        </Link>
      </div>
      {/* Section content*/}
      <div className="navbar-content">
        <div>
          <Link href={`/`}>
            <span className="icon icon-logo icon-normal"></span>
            <p className="is-text-purple is-size-2 is-bold">BIENVENIDO</p>
          </Link>

          {pathSegments.map((item, index) => (
            <Link href={`/${item}`} key={index}>
              <span className="icon icon-arrow icon-small"></span>
              <p className="is-text-gray is-size-2 is-semibold ">{item}</p>
            </Link>
          ))}
        </div>
        <div className="user">
          <span className="icon icon-help icon-normal"></span>
          <span className="icon icon-apps icon-normal"></span>
          <div className="user-profile">
            <span>UN</span>
            <p className="is-text-gray is-size-2 is-semibold">
              Nombre de usuario
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
