export default function InfoHub() {
  const info = [
    {
      title: "¿Necesita Ayuda?",
      icon: "icon-float",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "¿Por qué registrarse?",
      icon: "icon-heart",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "¿Qué está pasando?",
      icon: "icon-face",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="infoHub">
      {info &&
        info?.map(({ title, icon, description }, index) => (
          <div>
            <h5 className="is-size-2 is-text-purple is-bold">{title}</h5>
            <div className="infoHub-content">
              <i className={`icon ${icon} icon-big`}></i>
              <p>{description}</p>
            </div>
          </div>
        ))}
    </section>
  );
}
