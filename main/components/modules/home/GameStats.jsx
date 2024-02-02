import styles from "./styles.module.scss";

export default function GameStats() {
  const data = [
    {
      icon: "icon-sport",
      title: "Tipo de cancha",
      description: "Sociedad",
    },
    {
      icon: "icon-level",
      title: "Nivel",
      description: "Semiprofesional",
    },
    {
      icon: "icon-score",
      title: "Victorias",
      description: "345",
    },
  ];
  return (
    <section className={styles.gameStats}>
      <div className={`container ${styles.gameStats__container}`}>
        {data &&
          data.map(({ icon, title, description }, index) => {
            return (
              <div className={styles.gameStats__content}>
                <span className={`icon ${icon} icon-large`}></span>
                <div>
                  <p className="is-text-white is-size-2">{title}</p>
                  <p className="is-text-white is-size-3 is-normal">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
