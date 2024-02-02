import Filter from "../../ui/searchInput/SearchInput";
import styles from "./styles.module.scss";

export default function UsersInformation() {
  return (
    <section className={`container ${styles.usersInformation}`}>
      <h3 className="is-text-black02 fs-5 is-bold">Usuarios</h3>

      {/* SEARCH INPUT */}
      <div className="searchContainer">
        <form>
          <input
            className="searchContainer-Input"
            type="text"
            value={""}
            placeholder="Buscar"
          />
          <span className="searchContainer-Icon">
            <i className="icon icon-search icon-normal" />
          </span>
        </form>
      </div>

      {/* USERS TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Ciudad</th>
            <th>Días de la Semana</th>
            <th>Posts</th>
            <th>Álbums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="is-text-black is-semibold">SONYA64</td>
            <td>MILDRED TURNER</td>
            <td>loren@gmail.com</td>
            <td>ABRAHAM</td>
            <td>Todo</td>
            <td className="td-especial">3</td>
            <td className="td-especial">2</td>
          </tr>
          <tr>
            <td className="is-text-black is-semibold">SONYA64</td>
            <td>MILDRED TURNER</td>
            <td>loren@gmail.com</td>
            <td>ABRAHAM</td>
            <td>Todo</td>
            <td className="td-especial">3</td>
            <td className="td-especial">2</td>
          </tr>
          <tr>
            <td className="is-text-black is-semibold">SONYA64</td>
            <td>MILDRED TURNER</td>
            <td>loren@gmail.com</td>
            <td>ABRAHAM</td>
            <td>Todo</td>
            <td className="td-especial">3</td>
            <td className="td-especial">2</td>
          </tr>
          <tr>
            <td className="is-text-black is-semibold">SONYA64</td>
            <td>MILDRED TURNER</td>
            <td>loren@gmail.com</td>
            <td>ABRAHAM</td>
            <td>Todo</td>
            <td className="td-especial">3</td>
            <td className="td-especial">2</td>
          </tr>
          <tr>
            <td className="is-text-black is-semibold">SONYA64</td>
            <td>MILDRED TURNER</td>
            <td>loren@gmail.com</td>
            <td>ABRAHAM</td>
            <td>Todo</td>
            <td className="td-especial">3</td>
            <td className="td-especial">2</td>
          </tr>
        </tbody>
      </table>

      {/* PAGINATOR */}
      <div className="paginator">
        <p className="is-size-4 is-text-gray is-semibold">Total 100</p>
        <div className="paginator-content">
          <div className="paginator-contentButton" role="button">
            ANTERIOR
          </div>

          <div className={`page-item `}>1</div>

          <div
            className="paginator-contentButton"
            role="button"
            onClick={() => page < pagesNumber && updatePage(page + 1)}
          >
            PRÓXIMO
          </div>
        </div>

        <div className="paginator-content">
          <p className="is-size-4 is-text-gray is-semibold ">
            SALTAR A LA PÁGINA
          </p>
          <p>5</p>
        </div>
      </div>
    </section>
  );
}
