import { useState } from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import InfoHub from "../../ui/InfoHub/InfoHub";

export default function RegisterForm({ handleCreateUser, setResetForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const daysOfWeek = [
    { value: "Monday", label: "Lun" },
    { value: "Tuesday", label: "Mar" },
    { value: "Wednesday", label: "Mié" },
    { value: "Thursday", label: "Jue" },
    { value: "Friday", label: "Vie" },
    { value: "Saturday", label: "Sáb" },
    { value: "Sunday", label: "Dom" },
  ];

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Este campo nombre es requerido";
    }
    console.log(errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      fullName: "",
      email: "",
      city: "",
      days: "",
    },
    validate,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await handleCreateUser(values);
        if (setResetForm) {
          formik.resetForm();
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error creating user", error);
        setIsLoading(false);
      }
    },
  });

  return (
    <section className={`container `}>
      <h3 className="is-text-black02 fs-5 is-bold">Registro</h3>
      <InfoHub />
      <div className={styles.registerForm}>
        <h4 className="is-text-gray02 is-size-3 is-semibold">REGISTRO</h4>
        <form
          className="formGeneric"
          onSubmit={formik.handleSubmit}
          method="POST"
        >
          <div className="formGenericColumn">
            {/* Column 1 form */}
            <div className="formGenericColumnItems">
              <input
                className="input"
                id="username"
                name="username"
                placeholder="Nombre de usuario *"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                type="text"
              />

              <input
                className="input"
                id="fullName"
                name="fullName"
                placeholder="Nombre completo *"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                type="text"
              />

              <input
                id="email"
                name="email"
                placeholder="Correo electrónico *"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                className="input"
              />
            </div>

            {/* Column 2 form */}
            <div className="formGenericColumnItems">
              <input
                id="city"
                name="city"
                placeholder="Ciudad *"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                type="string"
                className={`input `}
              />

              <label className="is-text-gray02 is-size-2 is-semibold">
                DÍAS DE LA SEMANA
              </label>
              <div className="formGenericColumn-days">
                {daysOfWeek.map((day) => (
                  <label key={day.value}>
                    <input
                      type="checkbox"
                      name="days"
                      onChange={(e) => {
                        const newDays = e.target.checked
                          ? [...formik.values.days, day.value]
                          : formik.values.days.filter(
                              (selectedDay) => selectedDay !== day.value
                            );
                        formik.setFieldValue("days", newDays);
                      }}
                      onBlur={formik.handleBlur}
                      checked={formik.values.days.includes(day.value)}
                    />
                    {day.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="formGenericButtons">
            <button
              className={`button is-purple ${isLoading ? "is-loading" : ""}`}
              type="submit"
              disabled={isLoading}
            >
              Registro
            </button>
            <button className="button">Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
