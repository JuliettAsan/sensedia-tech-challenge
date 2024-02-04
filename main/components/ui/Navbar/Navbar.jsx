import Image from "next/image";
import Link from "next/link";

export default function Navbar({ pathSegments, user }) {
  const { name } = user;

  const initials = name
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase())
    .join("");

  const navigation = [
    "Lista de amigos",
    "Artículos guardados",
    "Notificaciones",
    "Preferencias",
    "Cerrar sesión",
  ];

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
        <div className="navbar-dropdown-breadcrumb">
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
        <div className="navbar-info">
          <span className="icon icon-help icon-normal"></span>
          <span className="icon icon-apps icon-normal"></span>

          <div className="navbar-dropdown">
            <div className={`navbar-dropdown-user `}>
              <div className={`navbar-dropdown-user-image `}>
                <span>{initials}</span>
              </div>
              <span className="is-text-gray is-size-2 is-semibold">
                {user.name}
              </span>
            </div>
            <div className="navbar-dropdown-content">
              {navigation.map((item, index) => (
                <Link className="navbar-item" href={`/${item}`} key={index}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
