import styles from "./styles.module.scss";

export default function RegisterForm() {
  const daysOfWeek = [
    { value: "Monday", label: "Lun" },
    { value: "Tuesday", label: "Mar" },
    { value: "Wednesday", label: "Mié" },
    { value: "Thursday", label: "Jue" },
    { value: "Friday", label: "Vie" },
    { value: "Saturday", label: "Sáb" },
    { value: "Sunday", label: "Dom" },
  ];

  return (
    <section className={`container `}>
      <h3 className="is-text-black02 fs-5 is-bold">Registro</h3>
      <div className={styles.registerForm}>
        <h4 className="is-text-gray02 is-size-3 is-semibold">REGISTRO</h4>
        <form className="formGeneric">
          <div className="formGenericColumn">
            {/* Column 1 form */}
            <div className="formGenericColumnItems">
              <input
                className="input"
                id="username"
                name="username"
                placeholder="Nombre de usuario *"
                /* onChange={onChange} */
                type="text"
              />
              {/* {isValidateActive && (
                <p className="formGenericColumnItemsError">
                  {errorMessage.username}
                </p>
              )} */}
              <input
                className="input"
                id="fullName"
                name="fullName"
                placeholder="Nombre completo *"
                /* onChange={onChange} */
                type="text"
              />
              {/* {isValidateActive && (
                <p className="formGenericColumnItemsError">
                  {errorMessage.fullName}
                </p>
              )} */}
              <input
                id="email"
                name="email"
                placeholder="Correo electrónico *"
                /* onChange={onChange} */
                type="email"
                className="input"
              />
              {/* {isValidateActive && (
                <p className="formGenericColumnItemsError">
                  {errorMessage.email}
                </p>
              )} */}
            </div>

            {/* Column 2 form */}
            <div className="formGenericColumnItems">
              <input
                id="city"
                name="city"
                placeholder="Ciudad *"
                /* onChange={onChange} */
                type="string"
                className={`input `}
              />
              {/* {isValidateActive && (
                <p className="formGenericColumnItemsError">
                  {errorMessage.city}
                </p>
              )} */}

              <label className="is-text-gray02 is-size-2 is-semibold">
                DÍAS DE LA SEMANA
              </label>
              <div className="formGenericColumn-days">
                {daysOfWeek.map((day) => (
                  <label key={day.value}>
                    <input type="checkbox" value={day.value} />
                    {day.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="formGenericButtons">
            <button className="button is-purple">Registro</button>
            <button className="button">Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
