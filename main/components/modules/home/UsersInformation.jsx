import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Loading from "../../ui/Loading/Loading";
import Link from "next/link";

export default function UsersInformation({
  data = [],
  setFilterURI,
  isLoading,
  pagesNumber = 1,
  handleDeleteUser,
}) {
  const { paginatedData, count } = data;
  const [keywords, setKeyword] = useState("");

  const [page, setPage] = useState(1);

  const updatePage = (value) => {
    setPage(value);
  };

  useEffect(() => {
    let uri = "";
    if (page) {
      uri += `page=${page}&`;
    }
    if (keywords) {
      uri += `keywords=${keywords}&`;
    }
    setFilterURI(uri);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keywords]);

  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords]);

  const filteredData = paginatedData?.filter(({ name }) =>
    name.toLowerCase().includes(keywords.toLowerCase())
  );

  return (
    <section className={`container ${styles.usersInformation}`}>
      <h3 className="is-text-black02 fs-5 is-bold">Usuarios</h3>

      {/* SEARCH INPUT */}
      <div className="content-input">
        <input
          className="input"
          type="text"
          placeholder="Buscar"
          value={keywords}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span className="content-input-Icon">
          <i className="icon icon-search icon-normal" />
        </span>
      </div>

      {isLoading && <Loading />}

      {/* USERS TABLE */}
      {paginatedData && (
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
            {paginatedData?.map(
              (
                {
                  id,
                  name,
                  email,
                  randomDays,
                  postCount,
                  albumCount,
                  randomCity,
                },
                index
              ) => (
                <tr key={index}>
                  <td className="is-text-black is-semibold">
                    <Link href={`/user/${id}`}>{id}</Link>
                  </td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{randomCity}</td>
                  <td>{randomDays}</td>
                  <td className="td-especial">{postCount}</td>
                  <td className="td-especial">{albumCount}</td>
                  <td className="td-especial">
                    <i
                      className="icon icon-trash icon-normal"
                      onClick={() => handleDeleteUser(paginatedData[index])}
                    ></i>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}

      {/* PAGINATOR */}
      {!isLoading && (
        <div className="paginator">
          <p className="is-size-4 is-text-gray is-semibold">Total {count}</p>
          <div className="paginator-content">
            <div
              className="paginator-contentButton"
              role="button"
              onClick={() => page > 1 && updatePage(page - 1)}
            >
              ANTERIOR
            </div>

            {new Array(pagesNumber).fill(0).map((_, index) => {
              return (
                <div
                  key={index}
                  className={`page-item ${
                    page === index + 1 ? "is-active" : ""
                  }`}
                  onClick={() => updatePage(index + 1)}
                >
                  {index + 1}
                </div>
              );
            })}

            <div
              className="paginator-contentButton"
              role="button"
              onClick={() => page < pagesNumber && updatePage(page + 1)}
            >
              PRÓXIMO
            </div>
          </div>

          <div className="paginator-content">
            <p className="is-size-4 is-text-gray is-semibold">
              SALTAR A LA PÁGINA
            </p>
            <select
              className="select-list"
              value={page}
              onChange={(e) => updatePage(parseInt(e.target.value))}
            >
              {new Array(pagesNumber).fill(0).map((_, index) => (
                <option
                  key={index}
                  value={index + 1}
                  className="is-size-4 is-text-gray"
                >
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </section>
  );
}
