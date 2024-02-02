import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Section Logo  */}
      <div className="navbar-logo">
        <Image
          src={"/Logo_ScoreManager.png"}
          alt="Logo Sensedia Score Manager"
          aria-label="Logo Sensedia Score Manager"
          fill={true}
          priority={true}
        />
      </div>
      {/* Section content*/}
      <div className="navbar-content">
        <div>
          <span className="icon icon-logo icon-normal"></span>
          <p className="is-text-purple is-size-2 is-semibold">BIENVENIDO</p>
          <span className="icon icon-arrow icon-small"></span>
          <p className="is-text-gray is-size-2 is-regular ">Registro</p>
        </div>
        <div className="user">
          <span className="icon icon-help icon-normal"></span>
          <span className="icon icon-apps icon-normal"></span>
          <div className="user-profile">
            <span>UN</span>
            <p className="is-text-gray is-regular">Nombre de usuario</p>
          </div>
        </div>
      </div>
    </div>
  );
}
